import { asArray } from './helpers.mjs';
import { renderEducationEntry } from './render-education-entry.mjs';

export const renderEducation=(items=[])=>{const html=asArray(items).map(renderEducationEntry).filter(Boolean).join('');return html?`<section class="education"><h2>Education & Credentials</h2>${html}</section>`:'';};