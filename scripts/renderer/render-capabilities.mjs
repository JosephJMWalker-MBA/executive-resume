import { asArray } from './helpers.mjs';
import { renderCapabilityGroup } from './render-capability-group.mjs';

export const renderCapabilities=(items=[])=>{const html=asArray(items).map(renderCapabilityGroup).filter(Boolean).join('');return html?`<section class="capabilities"><h2>Core Capabilities</h2>${html}</section>`:'';};