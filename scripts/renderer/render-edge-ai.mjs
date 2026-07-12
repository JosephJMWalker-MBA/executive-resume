import { escapeHtml, hasText } from './helpers.mjs';

export const renderEdgeAI=(edgeAI={})=>{const title=hasText(edgeAI.title)?escapeHtml(edgeAI.title):'';const summary=hasText(edgeAI.summary)?escapeHtml(edgeAI.summary):'';return title&&summary?`<section class="edge-ai"><h2>${title}</h2><p>${summary}</p></section>`:'';};