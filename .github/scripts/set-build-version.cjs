'use strict';

const fs = require('node:fs');
const path = require('node:path');

const packagePath = path.resolve('package.json');
const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
const baseVersion = /^(\d+)\.(\d+)\.\d+(?:[-+].*)?$/.exec(packageData.version);
const runNumber = Number(process.env.GITHUB_RUN_NUMBER);

if (!baseVersion) {
  throw new Error(`Expected a semver version in package.json, got: ${packageData.version}`);
}
if (!Number.isSafeInteger(runNumber) || runNumber < 1) {
  throw new Error('GITHUB_RUN_NUMBER must be a positive integer.');
}

const version = `${baseVersion[1]}.${baseVersion[2]}.${runNumber}`;
packageData.version = version;
fs.writeFileSync(packagePath, `${JSON.stringify(packageData, null, 2)}\n`);
fs.writeFileSync('build-version.js', `'use strict';\nwindow.CLIMANOVA_VERSION = ${JSON.stringify(version)};\n`);

if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `version=${version}\n`);
}

console.log(`ClimaNova version for this build: ${version}`);
