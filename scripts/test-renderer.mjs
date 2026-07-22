import assert from 'node:assert/strict';
import { renderDocument } from './renderer/render-document.mjs';

const full={identity:{name:'Test Person',documentLabel:'Resume',title:'Engineer',positioning:'Builds systems.'},contact:{email:'test@example.com'},executiveProfile:['Profile'],publications:{books:['Book',{title:'Linked Book',url:'https://example.com/book'}]},capabilities:[{group:'Code',items:['Python']}],systems:[{name:'System',highlights:['Tested']}],education:[{institution:'School',credential:'Degree'}],technicalEnvironment:{Languages:['Python']},achievements:['Shipped'],principles:['Verify'],footer:'Source'};
const minimal={identity:{name:'Minimal Person'}};
const escaped={identity:{name:'<script>alert(1)</script>'}};
const unsafeLink={identity:{name:'Unsafe Link'},publications:{books:[{title:'Do not link',url:'javascript:alert(1)'}]}};

for(const fixture of [full,minimal,{},escaped,unsafeLink]){const html=renderDocument(fixture);assert.ok(html.startsWith('<!doctype html>'));assert.ok(!html.includes('undefined'));assert.ok(!html.includes('>null<'));}
assert.match(renderDocument(full),/Test Person/);
assert.match(renderDocument(minimal),/Minimal Person/);
assert.doesNotMatch(renderDocument(minimal),/Publications/);
assert.match(renderDocument(escaped),/&lt;script&gt;/);
assert.doesNotMatch(renderDocument(escaped),/<script>alert/);
assert.match(renderDocument(full),/<a href="https:\/\/example\.com\/book" target="_blank" rel="noopener noreferrer">Linked Book<\/a>/);
assert.match(renderDocument(unsafeLink),/<li>Do not link<\/li>/);
assert.doesNotMatch(renderDocument(unsafeLink),/javascript:/);
console.log('Renderer tests passed');
