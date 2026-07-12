import { escapeHtml, hasText } from './helpers.mjs';

export const renderName = (value = '') =>
  hasText(value) ? `<h1>${escapeHtml(value)}</h1>` : '';