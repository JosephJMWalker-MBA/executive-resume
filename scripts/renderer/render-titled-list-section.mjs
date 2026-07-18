import { escapeHtml, hasText } from './helpers.mjs';
import { renderList } from './render-list.mjs';

export const renderTitledListSection=(title='',items=[],className='')=>{const list=renderList(items);const cls=hasText(className)?` class="${escapeHtml(className)}"`:'';return hasText(title)&&list?`<section${cls}><h2>${escapeHtml(title)}</h2>${list}</section>`:'';};