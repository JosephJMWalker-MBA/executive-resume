import { hasText } from './helpers.mjs';
import { renderLink } from './render-link.mjs';

export const renderEmail = (value = '') =>
  hasText(value) ? renderLink(value, `mailto:${value}`) : '';
