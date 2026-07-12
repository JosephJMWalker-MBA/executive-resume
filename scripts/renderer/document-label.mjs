import { escapeHtml, hasText } from './helpers.mjs';

export const renderDocumentLabel = (value = '') =>
  hasText(value)
    ? `<div class="document-label">${escapeHtml(value)}</div>`
    : '';
