import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderDocument } from './renderer/render-document.mjs';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const resume=JSON.parse(await readFile(resolve(root,'data/resume.json'),'utf8'));
await writeFile(resolve(root,'index.html'),renderDocument(resume));
console.log('Wrote index.html');