import { escapeHtml, hasText } from './helpers.mjs';

export const renderListItem=(value='')=>hasText(value)?`<li>${escapeHtml(value)}</li>`:'';