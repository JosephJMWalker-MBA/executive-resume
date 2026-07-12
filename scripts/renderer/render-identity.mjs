import { renderName } from './render-name.mjs';
import { renderTitle } from './render-title.mjs';
import { renderPositioning } from './render-positioning.mjs';

export const renderIdentity=(identity={})=>{
  const html=[renderName(identity.name),renderTitle(identity.title),renderPositioning(identity.positioning)].filter(Boolean).join('');
  return html?`<div class="identity">${html}</div>`:'';
};