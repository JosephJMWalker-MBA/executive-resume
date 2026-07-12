import { renderLocation } from './render-location.mjs';
import { renderPhone } from './render-phone.mjs';
import { renderEmail } from './render-email.mjs';
import { renderNamedLinks } from './render-named-links.mjs';

export const renderContact = (contact = {}) => {
  const items = [renderLocation(contact.location), renderPhone(contact.phone), renderEmail(contact.email), ...renderNamedLinks(contact)].filter(Boolean);
  return items.length ?