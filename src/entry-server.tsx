import { renderToString } from 'react-dom/server';
import App from './App';
import { buildLlmsTxt } from './content/llms';
import { buildGraph, pageTitle } from './content/seo';

/**
 * Build-time entry. The site has no data fetching or routing, so the whole
 * page can be rendered to static HTML once at build and shipped in the
 * document — which is the only way crawlers that don't execute JavaScript
 * (most AI crawlers) ever see the content.
 */
export function render(): string {
  return renderToString(<App />);
}

/**
 * Structured data, built from the same content modules the page renders so the
 * two cannot disagree. `scripts/prerender.mjs` injects the result.
 */
export function renderStructuredData(dateModified: string): string {
  return JSON.stringify(buildGraph(dateModified));
}

/**
 * `llms.txt`, also generated from the content modules. Hand-maintaining it made
 * it a second copy of every fact with nothing keeping the two in agreement.
 */
export function renderLlmsTxt(): string {
  return buildLlmsTxt();
}

/** Exported so the build can assert index.html's <title> has not drifted. */
export const expectedTitle = pageTitle;
