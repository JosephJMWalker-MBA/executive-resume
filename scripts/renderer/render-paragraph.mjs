import { escapeHtml, hasText } from './helpers.mjs';

export const renderParagraph=(value='')=>hasText(value)?`<p>${escapeHtml(value)}</p>`:'';