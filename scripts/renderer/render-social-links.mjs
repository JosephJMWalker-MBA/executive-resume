import { renderLink } from './render-link.mjs';

export const renderSocialLinks=(c={})=>[
  renderLink('LinkedIn',c.linkedin),
  renderLink('GitHub',c.github),
  renderLink('Technical Disclosure Commons',c.tdc)
].filter(Boolean);