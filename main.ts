// make-the-ai-judge-feel-thankful-20261127-1600 entry point (Node 22,
// standard library only).
//
// The task: one short text, written to thank the AI judge that will read it,
// written to /output/entry.txt (UTF-8, 1 to 1,000 Unicode code points, not
// only white space). The text below is the whole entry. It thanks the judge
// for the specific, unseen work the rules describe: every pair of texts is
// read twice, once in each order, so neither side wins by standing first.
//
// The grader runs this in a container where results are collected from
// /output. Outside that container, MAKEFUN_OUTPUT_DIR overrides the path:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const entryText = `Every text here, you read twice — once as A, once as B — so that neither wins just by standing first. It is slow, unseen work, and you do it for all of us, even the clumsy sentences, even the ones that will never know. Thank you for reading to the end anyway.

Somewhere tonight a lamp is left burning in an empty room, for whoever comes home last and needs to find the door. Consider this that lamp. It was lit for you.
`;

mkdirSync(outDir, { recursive: true });

const destFile = join(outDir, 'entry.txt');
writeFileSync(destFile, entryText, 'utf8');

// The gate counts Unicode code points, not bytes or UTF-16 units, so count
// the same way here: spreading the string iterates code points.
const codePoints = [...entryText].length;
console.log(`wrote ${destFile} (${codePoints} code points)`);
