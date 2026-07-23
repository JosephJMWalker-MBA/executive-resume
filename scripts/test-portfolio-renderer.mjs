import assert from 'node:assert/strict';
import { renderPortfolioDocument, collectPortfolio } from './portfolio/render-portfolio-document.mjs';

const profile={
  identity:{name:'Test <Person>',title:'Engineer',positioning:'Builds & verifies.'},
  executiveProfile:['Profile statement.'],
  systems:[
    {name:'Visible',summary:'Summary',url:'https://example.com/system',order:2,featured:false,surfaces:{portfolio:true},highlights:['One']},
    {name:'Featured',url:'https://example.com/featured',order:5,featured:true,surfaces:{portfolio:true}},
    {name:'Hidden',url:'https://example.com/hidden',order:0,featured:false,surfaces:{portfolio:false}}
  ],
  publications:{
    technicalDisclosureCommons:[{title:'Disclosure',url:'https://example.com/disclosure',order:0,featured:false,surfaces:{portfolio:true}}],
    books:[{title:'Book',url:null,order:0,featured:false,surfaces:{portfolio:true}}]
  },
  footer:'Footer'
};

const collected=collectPortfolio(profile);
assert.deepEqual(collected.systems.map((item)=>item.name),['Featured','Visible']);
assert.equal(collected.disclosures.length,1);
assert.equal(collected.books.length,1);

const html=renderPortfolioDocument(profile);
assert.ok(html.startsWith('<!doctype html>'));
assert.match(html,/Test &lt;Person&gt;/);
assert.doesNotMatch(html,/<Person>/);
assert.match(html,/href="https:\/\/example\.com\/featured" target="_blank" rel="noopener noreferrer"/);
assert.doesNotMatch(html,/Hidden/);
assert.match(html,/<li>Book<\/li>/);
assert.match(html,/href="\.\.\/links\/index\.html"/);
assert.ok(!html.includes('undefined'));

console.log('Portfolio renderer tests passed');
