import { readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const dataPath = resolve(root, 'data', 'resume.json');
const outputPath = resolve(root, 'index.html');

const resume = JSON.parse(await readFile(dataPath, 'utf8'));

const escapeHtml = (value = '') =>
  String