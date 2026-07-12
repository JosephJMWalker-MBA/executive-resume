import { renderLink } from './render-link.mjs';

export const renderNamedLinks = (contact = {}) => [
  renderLink('LinkedIn', contact.linkedin),
  renderLink('GitHub', contact.github),
  renderLink('Technical Disclosure Commons', contact.tdc)
].filter(Boolean);