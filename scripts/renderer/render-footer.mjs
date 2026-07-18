import { escapeHtml, hasText } from './helpers.mjs';

export const renderFooter=(value='')=>hasText(value)?`<footer>${escapeHtml(value)}</footer>`:'';