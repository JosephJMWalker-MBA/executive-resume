import { escapeHtml, hasText } from './helpers.mjs';

export const renderLocation = (value = '') =>
  hasText(value) ? `<span>${escapeHtml(value)}</span>` : '';
