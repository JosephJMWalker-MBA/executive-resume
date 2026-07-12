import { escapeHtml, hasText } from './helpers.mjs';

const link = (label, url) =>
  hasText(url) ? `<a href="${escapeHtml(url)}">${escapeHtml(label)}</a>` : '';

export const renderContactLinks = (contact = {}) =>
  [
    hasText(contact.location) ? `<span>${escapeHtml(contact.location)}</span>` : '',
    hasText(contact.phone) ? `<span>${escapeHtml(contact.phone)}</span>` : '',
    hasText(contact.email) ? link(contact.email, `mailto:${contact.email}`