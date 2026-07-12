import { escapeHtml, hasText } from './helpers.mjs';

export const renderLink = (label = '', url = '') =>
  hasText(label) && hasText(url)
    ? `<a href="${escapeHtml(url)}">${escapeHtml(label)}</a>`
    : '';
