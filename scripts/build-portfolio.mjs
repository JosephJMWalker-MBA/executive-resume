import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalizeProfile } from './profile/normalize-profile.mjs';
import { renderPortfolioDocument } from './portfolio/render-portfolio-document.mjs';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const source=JSON.parse(await readFile(resolve(root,'data/resume.json'),'utf8'));
const profile=normalizeProfile(source);
const outputDirectory=resolve(root,'portfolio');
await mkdir(outputDirectory,{recursive:true});
await writeFile(resolve(outputDirectory,'index.html'),renderPortfolioDocument(profile));
console.log('Wrote portfolio/index.html');
