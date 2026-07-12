export const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

export const asArray = (value) => Array.isArray(value) ? value : [];
export const hasItems = (value) => asArray(value).length > 0;
export const hasText = (value) => typeof value === 'string' && value.trim().length > 0;
export const joinItems = (value