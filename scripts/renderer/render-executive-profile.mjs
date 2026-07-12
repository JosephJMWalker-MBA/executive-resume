import { asArray } from './helpers.mjs';
import { renderParagraph } from './render-paragraph.mjs';

export const renderExecutiveProfile=(items=[])=>{const html=asArray(items).map(renderParagraph).filter(Boolean).join('');return html?`<section class="executive-profile"><h2>Executive Profile</h2>${html}</section>`:'';};