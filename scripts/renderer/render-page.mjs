import { renderOverview } from './render-overview.mjs';
import { renderDetails } from './render-details.mjs';
import { renderFooter } from './render-footer.mjs';

const renderSurfaceNavigation=()=>'<nav class="surface-nav" aria-label="Professional profile navigation"><a href="links/index.html">Links</a><a href="portfolio/index.html">Portfolio</a></nav>';

export const renderPage=(resume={})=>{const one=renderOverview(resume);const two=[renderDetails(resume),renderFooter(resume.footer)].filter(Boolean).join('');return `<main class="resume" id="resume">${renderSurfaceNavigation()}${one?`<section class="page page-one">${one}</section>`:''}${two?`<section class="page page-two">${two}</section>`:''}</main>`;};
