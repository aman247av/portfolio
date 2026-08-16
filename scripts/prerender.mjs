import { readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

/**
 * Injects the server-rendered markup and the generated structured data into
 * the built index.html.
 *
 * Run after `vite build` (client) and `vite build --ssr` (server). The server
 * bundle is deleted afterwards — it is a build artifact, not something to ship.
 */

const root = resolve(import.meta.dirname, '..');
const htmlPath = resolve(root, 'dist/index.html');
const sitemapPath = resolve(root, 'dist/sitemap.xml');
const serverEntry = resolve(root, 'dist/server/entry-server.js');

const fail = (msg) => {
  console.error(`[prerender] ${msg}`);
  process.exit(1);
};

if (!existsSync(serverEntry)) {
  fail('server bundle missing — did `vite build --ssr` run?');
}

const { render, renderStructuredData, renderLlmsTxt, expectedTitle } = await import(
  pathToFileURL(serverEntry).href
);

const appHtml = render();

if (!appHtml || appHtml.length < 500) {
  fail('render() produced suspiciously little markup; aborting');
}

let html = readFileSync(htmlPath, 'utf8');

/* ---- Markup -------------------------------------------------------------- */

const rootMarker = '<div id="root"></div>';
if (!html.includes(rootMarker)) fail('could not find the root div to inject into');
html = html.replace(rootMarker, `<div id="root">${appHtml}</div>`);

/* ---- Title drift guard ---------------------------------------------------
   The structured data is generated from src/content; the <title> is authored
   by hand in index.html. Anything authored twice eventually disagrees, so the
   build refuses to ship a mismatch rather than letting it rot silently.      */

const titleMatch = html.match(/<title>([^<]*)<\/title>/);
if (!titleMatch) fail('no <title> found in index.html');

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

const actualTitle = decode(titleMatch[1]).trim();
if (actualTitle !== expectedTitle) {
  fail(
    `<title> has drifted from the content model.\n` +
      `           index.html : "${actualTitle}"\n` +
      `           content    : "${expectedTitle}"\n` +
      `           Update index.html, or site.name/site.role in src/content/site.ts.`,
  );
}

/* ---- Structured data ----------------------------------------------------- */

const dateModified = new Date().toISOString().slice(0, 10);
const ldMarker = '<!--structured-data-->';
if (!html.includes(ldMarker)) fail(`could not find ${ldMarker} to inject into`);

const ld = renderStructuredData(dateModified);
JSON.parse(ld); // cheap guard against emitting malformed JSON-LD

html = html.replace(
  ldMarker,
  `<script type="application/ld+json">${ld.replace(/</g, '\\u003c')}</script>`,
);

/* ---- Analytics ----------------------------------------------------------
   Production only. Cloudflare's beacon rejects any origin but the registered
   one, so in dev it only throws CORS errors and buries real ones.           */

const CF_BEACON_TOKEN = '7a1fbb18312e4d1d8a32cc5d4420b003';
const analyticsMarker = '<!--analytics-->';
if (!html.includes(analyticsMarker)) fail(`could not find ${analyticsMarker} to inject into`);

html = html.replace(
  analyticsMarker,
  `<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "${CF_BEACON_TOKEN}"}'></script>`,
);

/* All HTML mutations are done — write once. */
writeFileSync(htmlPath, html);

/* ---- Sitemap ------------------------------------------------------------- */

if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, 'utf8').replace(
    /<lastmod>[^<]*<\/lastmod>/,
    `<lastmod>${dateModified}</lastmod>`,
  );
  writeFileSync(sitemapPath, sitemap);
}

/* ---- llms.txt ---------------------------------------------------------- */

const llms = renderLlmsTxt();
if (!llms || llms.length < 1000) fail('llms.txt generation produced too little text');
writeFileSync(resolve(root, 'dist/llms.txt'), llms);

rmSync(resolve(root, 'dist/server'), { recursive: true, force: true });

const text = appHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const nodes = JSON.parse(ld)['@graph'].length;
console.log(`[prerender] injected ${(appHtml.length / 1024).toFixed(1)} KB of markup`);
console.log(`[prerender] ${text.length} characters of crawlable text`);
console.log(`[prerender] ${nodes} structured-data nodes, dateModified ${dateModified}`);
console.log(`[prerender] llms.txt generated, ${(llms.length / 1024).toFixed(1)} KB`);
