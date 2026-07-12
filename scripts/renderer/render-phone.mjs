import { escapeHtml, hasText } from './helpers.mjs';

export const renderPhone = (value = '') =>
  hasText(value) ? `<span>${escapeHtml(value)}</span>` : '';
