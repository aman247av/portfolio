import { readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

/**
 * Injects the server-rendered markup into the built index.html.
 *
 * Run after `vite build` (client) and `vite build --ssr` (server). The server
 * bundle is deleted afterwards — it is a build artifact, not something to ship.
 */

const root = resolve(import.meta.dirname, '..');
const htmlPath = resolve(root, 'dist/index.html');
const serverEntry = resolve(root, 'dist/server/entry-server.js');

if (!existsSync(serverEntry)) {
  console.error('[prerender] server bundle missing — did `vite build --ssr` run?');
  process.exit(1);
}

const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render();

if (!appHtml || appHtml.length < 500) {
  console.error('[prerender] render() produced suspiciously little markup; aborting');
  process.exit(1);
}

const html = readFileSync(htmlPath, 'utf8');
const marker = '<div id="root"></div>';

if (!html.includes(marker)) {
  console.error('[prerender] could not find the root div to inject into');
  process.exit(1);
}

writeFileSync(htmlPath, html.replace(marker, `<div id="root">${appHtml}</div>`));
rmSync(resolve(root, 'dist/server'), { recursive: true, force: true });

const text = appHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
console.log(`[prerender] injected ${(appHtml.length / 1024).toFixed(1)} KB of markup`);
console.log(`[prerender] ${text.length} characters of crawlable text`);
