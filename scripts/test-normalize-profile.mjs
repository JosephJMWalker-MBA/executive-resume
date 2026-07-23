import assert from 'node:assert/strict';
import { normalizeHttpUrl, normalizeLinkableRecord, normalizeProfile } from './profile/normalize-profile.mjs';

const source={
  publications:{
    technicalDisclosureCommons:['Legacy',{title:'Linked',url:'https://example.com/evidence'},{title:'Unsafe',url:'javascript:alert(1)'},null],
    books:['Book']
  },
  systems:[
    {name:'Linked System',url:'https://example.com/system'},
    {name:'Unsafe System',url:'data:text/html,test'},
    {name:'Unlinked System'},
    {url:'https://example.com/missing-name'}
  ]
};
const before=structuredClone(source);
const normalized=normalizeProfile(source);

assert.deepEqual(source,before,'normalization must not mutate source data');
assert.equal(normalizeHttpUrl('javascript:alert(1)'),null);
assert.equal(normalizeHttpUrl('https://example.com/path'),'https://example.com/path');
assert.equal(normalizeLinkableRecord(' Legacy ',3).title,'Legacy');
assert.equal(normalized.publications.technicalDisclosureCommons.length,3);
assert.deepEqual(normalized.publications.technicalDisclosureCommons.map((item)=>item.title),['Legacy','Linked','Unsafe']);
assert.equal(normalized.publications.technicalDisclosureCommons[0].url,null);
assert.equal(normalized.publications.technicalDisclosureCommons[1].url,'https://example.com/evidence');
assert.equal(normalized.publications.technicalDisclosureCommons[2].url,null);
assert.deepEqual(normalized.publications.technicalDisclosureCommons.map((item)=>item.order),[0,1,2]);
assert.equal(normalized.publications.books[0].surfaces.resume,true);
assert.equal(normalized.publications.books[0].surfaces.links,false);
assert.equal(normalized.systems.length,3);
assert.equal(normalized.systems[0].surfaces.links,true);
assert.equal(normalized.systems[1].url,null);
assert.equal(normalized.systems[1].surfaces.links,true,'visibility is independent from URL validity');
assert.equal(normalized.systems[2].surfaces.links,false);
assert.equal(normalized.systems[0].featured,false);
assert.equal(normalized.systems[0].order,0);

console.log('Profile normalization tests passed');
