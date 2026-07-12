export const escapeHtml=(v='')=>String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
export const asArray=v=>Array.isArray(v)?v:[];
export const hasItems=v=>asArray(v).length>0;
export const hasText=v=>typeof v==='string'&&v.trim().length>0;
export const joinItems=v=>asArray(v).map(escapeHtml).join(' • ');
