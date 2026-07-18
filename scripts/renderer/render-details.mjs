import { renderEdgeAI } from './render-edge-ai.mjs';
import { renderSystems } from './render-systems.mjs';
import { renderEducation } from './render-education.mjs';
import { renderTechnicalEnvironment } from './render-technical-environment.mjs';
import { renderAchievements } from './render-achievements.mjs';
import { renderPrinciples } from './render-principles.mjs';

export const renderDetails=(resume={})=>[renderEdgeAI(resume.edgeAI),renderSystems(resume.systems),renderEducation(resume.education),renderTechnicalEnvironment(resume.technicalEnvironment),renderAchievements(resume.achievements),renderPrinciples(resume.principles)].filter(Boolean).join('');