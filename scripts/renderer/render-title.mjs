import { escapeHtml, hasText } from './helpers.mjs';

export const renderTitle = (value = '') =>
  hasText(value) ? `<p class="role">${escapeHtml(value)}</p>` : '';
