import { asArray } from './helpers.mjs';
import { renderSystemCard } from './render-system-card.mjs';

export const renderSystems=(items=[])=>{const html=asArray(items).map(renderSystemCard).filter(Boolean).join('');return html?`<section class="systems"><h2>Selected Systems</h2>${html}</section>`:'';};