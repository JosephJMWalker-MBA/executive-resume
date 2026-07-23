import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderLinksDocument } from './links/render-links-document.mjs';
import { normalizeProfile } from './profile/normalize-profile.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = JSON.parse(await readFile(resolve(root, 'data/resume.json'), 'utf8'));
const profile = normalizeProfile(source);
const outputDir = resolve(root, 'links');
await mkdir(outputDir, { recursive: true });
await writeFile(resolve(outputDir, 'index.html'), renderLinksDocument(profile));
console.log('Wrote links/index.html');
