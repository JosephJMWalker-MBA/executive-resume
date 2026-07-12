import { escapeHtml, hasText } from './helpers.mjs';
import { renderList } from './render-list.mjs';

export const renderCapabilityGroup=(capability={})=>{const list=renderList(capability.items);return hasText(capability.group)&&list?`<div class="capability-group"><h3>${escapeHtml(capability.group)}</h3>${list}</div>`:'';};