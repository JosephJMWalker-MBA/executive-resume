import { escapeHtml, hasText } from './helpers.mjs';

export const renderPositioning = (value = '') =>
  hasText(value) ? `<p class="positioning">${escapeHtml(value)}</p>` : '';
