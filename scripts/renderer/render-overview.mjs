import { renderMasthead } from './render-masthead.mjs';
import { renderExecutiveProfile } from './render-executive-profile.mjs';
import { renderPublications } from './render-publications.mjs';
import { renderCapabilities } from './render-capabilities.mjs';

export const renderOverview=(resume={})=>[renderMasthead(resume),renderExecutiveProfile(resume.executiveProfile),renderPublications(resume.publications),renderCapabilities(resume.capabilities)].filter(Boolean).join('');