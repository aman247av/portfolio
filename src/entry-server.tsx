import { renderToString } from 'react-dom/server';
import App from './App';

/**
 * Build-time entry. The site has no data fetching or routing, so the whole
 * page can be rendered to static HTML once at build and shipped in the
 * document — which is the only way crawlers that don't execute JavaScript
 * (most AI crawlers) ever see the content.
 */
export function render(): string {
  return renderToString(<App />);
}
