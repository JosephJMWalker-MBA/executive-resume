import { escapeHtml, hasText } from './helpers.mjs';
import { renderList } from './render-list.mjs';

export const renderTechnicalGroup=(title='',items=[])=>{const list=renderList(items);return hasText(title)&&list?`<div class="technical-group"><h3>${escapeHtml(title)}</h3>${list}</div>`:'';};