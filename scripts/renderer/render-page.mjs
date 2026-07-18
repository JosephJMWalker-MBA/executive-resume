import { renderOverview } from './render-overview.mjs';
import { renderDetails } from './render-details.mjs';
import { renderFooter } from './render-footer.mjs';

export const renderPage=(resume={})=>{const one=renderOverview(resume);const two=[renderDetails(resume),renderFooter(resume.footer)].filter(Boolean).join('');return `<main class="resume" id="resume">${one?`<section class="page page-one">${one}</section>`:''}${two?`<section class="page page-two">${two}</section>`:''}</main>`;};