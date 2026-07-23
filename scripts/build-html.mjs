import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalizeProfile } from './profile/normalize-profile.mjs';
import { renderDocument } from './renderer/render-document.mjs';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const source=JSON.parse(await readFile(resolve(root,'data/resume.json'),'utf8'));
const resume=normalizeProfile(source);
await writeFile(resolve(root,'index.html'),renderDocument(resume));
console.log('Wrote index.html');
