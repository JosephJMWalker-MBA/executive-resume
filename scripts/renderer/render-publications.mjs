import { hasText, escapeHtml } from './helpers.mjs';
import { renderPublicationGroup } from './render-publication-group.mjs';

export const renderPublications=(publications={})=>{const parts=[renderPublicationGroup('Technical Disclosure Commons',publications.technicalDisclosureCommons),renderPublicationGroup('Books',publications.books),hasText(publications.focus)?`<p class="publication-focus"><strong>Focus:</strong> ${escapeHtml(publications.focus)}</p>`:''].filter(Boolean).join('');return parts?`<section class="publications"><h2>Publications</h2>${parts}</section>`:'';};