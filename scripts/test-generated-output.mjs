import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { constants } from 'node:fs';

const expectedFiles = [
  'index.html',
  'links/index.html',
  'portfolio/index.html'
];

for (const path of expectedFiles) {
  await access(path, constants.R_OK);
  const html = await readFile(path, 'utf8');
  assert.match(html, /^<!doctype html>/i, `${path} must be a complete HTML document`);
  assert.doesNotMatch(html, /undefined|>null</, `${path} must not expose undefined or null values`);
}

const links = await readFile('links/index.html', 'utf8');
assert.match(links, /View executive resume/);

const portfolio = await readFile('portfolio/index.html', 'utf8');
assert.match(portfolio, /View links|Professional portfolio/i);

console.log('Generated output smoke tests passed');
