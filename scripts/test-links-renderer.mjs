import assert from 'node:assert/strict';
import { renderLinksDocument, collectRecords } from './links/render-links-document.mjs';

const profile={
  identity:{name:'Test Person',positioning:'Builds trustworthy systems.'},
  systems:[
    {name:'Visible System',url:'https://example.com/system',order:2,featured:false,surfaces:{links:true}},
    {name:'Featured System',url:'https://example.com/featured',order:9,featured:true,surfaces:{links:true}},
    {name:'Hidden System',url:'https://example.com/hidden',order:0,featured:true,surfaces:{links:false}},
    {name:'No URL',url:null,order:1,featured:false,surfaces:{links:true}}
  ],
  publications:{
    technicalDisclosureCommons:[{title:'Disclosure',url:'https://example.com/disclosure',order:1,featured:false,surfaces:{links:true}}],
    books:[{title:'Book',url:'https://example.com/book',order:3,featured:false,surfaces:{links:true}}]
  }
};

const records=collectRecords(profile);
assert.deepEqual(records.map((item)=>item.title),['Featured System','Disclosure','Visible System','Book']);
const html=renderLinksDocument(profile);
assert.ok(html.startsWith('<!doctype html>'));
assert.match(html,/Test Person — Links/);
assert.match(html,/Featured System/);
assert.match(html,/Disclosure/);
assert.doesNotMatch(html,/Hidden System/);
assert.doesNotMatch(html,/No URL/);
assert.match(html,/target="_blank" rel="noopener noreferrer"/);
assert.match(html,/View executive resume/);
assert.doesNotMatch(html,/undefined/);

const escaped=renderLinksDocument({identity:{name:'<script>alert(1)</script>'},systems:[]});
assert.match(escaped,/&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
assert.doesNotMatch(escaped,/<script>alert/);

console.log('Links renderer tests passed');
