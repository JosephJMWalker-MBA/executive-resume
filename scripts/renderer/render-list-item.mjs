import { escapeHtml, hasText } from './helpers.mjs';

const safeExternalUrl=(value='')=>{
  if(!hasText(value)) return '';
  try {
    const url=new URL(String(value));
    return ['http:','https:'].includes(url.protocol)?url.href:'';
  } catch {
    return '';
  }
};

const renderLinkedText=(text='',url='')=>{
  if(!hasText(text)) return '';
  const label=escapeHtml(text);
  const href=safeExternalUrl(url);
  return href?`<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${label}</a>`:label;
};

export const renderListItem=(value='')=>{
  if(typeof value==='string') return hasText(value)?`<li>${escapeHtml(value)}</li>`:'';
  if(!value||typeof value!=='object') return '';
  const text=value.title??value.name??value.label??value.text??'';
  const content=renderLinkedText(text,value.url);
  return content?`<li>${content}</li>`:'';
};
