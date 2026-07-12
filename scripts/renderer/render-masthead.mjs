import { renderDocumentLabel } from './document-label.mjs';
import { renderIdentity } from './render-identity.mjs';
import { renderContact } from './render-contact.mjs';

export const renderMasthead=(resume={})=>{const html=[renderDocumentLabel(resume.identity?.documentLabel),renderIdentity(resume.identity),renderContact(resume.contact)].filter(Boolean).join('');return html?`<header class="masthead">${html}</header>`:'';};