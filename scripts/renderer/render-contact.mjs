import { renderLocation } from './render-location.mjs';
import { renderPhone } from './render-phone.mjs';
import { renderEmail } from './render-email.mjs';
import { renderNamedLinks } from './render-named-links.mjs';

export const renderContact=(c={})=>{const x=[renderLocation(c.location),renderPhone(c.phone),renderEmail(c.email),...renderNamedLinks(c)].filter(Boolean);return x.length?`<address>${x.join(' • ')}</address>`:'';};