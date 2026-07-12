import { asArray } from './helpers.mjs';
import { renderListItem } from './render-list-item.mjs';

export const renderList=(items=[])=>{const html=asArray(items).map(renderListItem).filter(Boolean).join('');return html?`<ul>${html}</ul>`:'';};