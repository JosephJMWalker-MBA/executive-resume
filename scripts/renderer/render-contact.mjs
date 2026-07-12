import { renderLocation } from './render-location.mjs';
import { renderPhone } from './render-phone.mjs';
import { renderEmail } from './render-email.mjs';
import { renderLink } from './render-link.mjs';

export const renderContact = (contact = {}) => {
  const items = [
    renderLocation(contact.location),
    renderPhone(contact.phone),
    renderEmail(contact.email),
    renderLink('LinkedIn', contact.linkedin),
    renderLink('GitHub', contact.github),
    renderLink('Technical Disclosure Commons', contact.tdc)