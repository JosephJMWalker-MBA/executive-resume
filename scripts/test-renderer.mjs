import assert from 'node:assert/strict';
import { renderDocument } from './renderer/render-document.mjs';

const full={identity:{name:'Test Person',documentLabel:'Resume',title:'Engineer',positioning:'Builds systems.'},contact:{email:'test@example.com'},executiveProfile:['Profile'],publications:{books:['Book']},capabilities:[{group:'Code',items:['Python']}],systems:[{name:'System',highlights:['Tested']}],education:[{institution:'School',credential:'Degree'}],technicalEnvironment:{Languages:['Python']},achievements:['Shipped'],principles:['Verify'],footer:'Source'};
const minimal={identity:{name:'Minimal Person'}};
const escaped={identity:{name:'<script>alert(1)</script>'}};

for(const fixture of [full,minimal,{},escaped]){const html=renderDocument(fixture);assert.ok(html.startsWith('<!doctype html>'));assert.ok(!html.includes('undefined'));assert.ok(!html.includes('>null<'));}
assert.match(renderDocument(full),/Test Person/);
assert.match(renderDocument(minimal),/Minimal Person/);
assert.doesNotMatch(renderDocument(minimal),/Publications/);
assert.match(renderDocument(escaped),/&lt;script&gt;/);
assert.doesNotMatch(renderDocument(escaped),/<script>alert/);
console.log('Renderer tests passed');