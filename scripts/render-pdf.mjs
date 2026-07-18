import { chromium } from '@playwright/test';
import { mkdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getPdfFileName } from './renderer/get-pdf-filename.mjs';

const __dirname=dirname(fileURLToPath(import.meta.url));
const root=resolve(__dirname,'..');
const resume=JSON.parse(await readFile(resolve(root,'data/resume.json'),'utf8'));
const input=`file://${resolve(root,'index.html')}`;
const output=resolve(root,'dist',getPdfFileName(resume));

await mkdir(resolve(root,'dist'),{recursive:true});
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:816,height:1056},deviceScaleFactor:2});
await page.goto(input,{waitUntil:'networkidle'});
await page.emulateMedia({media:'print'});
await page.pdf({path:output,format:'Letter',printBackground:true,preferCSSPageSize:true,margin:{top:'0in',right:'0in',bottom:'0in',left:'0in'}});
await browser.close();
console.log(`Wrote ${output}`);