export const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

export const joinItems = (items = []) =>
  (Array.isArray(items) ? items : []).map(escapeHtml).join(' • ');

export const hasText = (value) =>
  typeof value === 'string' && value.trim().length > 0;

export const hasItems