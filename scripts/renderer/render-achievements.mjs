import { renderTitledListSection } from './render-titled-list-section.mjs';

export const renderAchievements=(items=[])=>renderTitledListSection('Selected Achievements',items,'achievements');