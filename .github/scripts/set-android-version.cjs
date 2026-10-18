'use strict';

const fs = require('node:fs');
const path = require('node:path');
const runNumber = Number(process.env.GITHUB_RUN_NUMBER);
const version = process.env.APP_VERSION;
if (!Number.isSafeInteger(runNumber) || runNumber < 1 || !/^\d+\.\d+\.\d+$/.test(version || '')) {
  throw new Error('A valid GITHUB_RUN_NUMBER and APP_VERSION are required.');
}
const file = path.resolve('android/app/build.gradle');
let gradle = fs.readFileSync(file, 'utf8');
if (!/versionCode\s+\d+/.test(gradle) || !/versionName\s+["'][^"']+["']/.test(gradle)) {
  throw new Error('Could not find Android versionCode/versionName in generated Gradle file.');
}
gradle = gradle.replace(/versionCode\s+\d+/, `versionCode ${runNumber}`);
gradle = gradle.replace(/versionName\s+["'][^"']+["']/, `versionName "${version}"`);
fs.writeFileSync(file, gradle);
console.log(`Android version set to ${version} (${runNumber}).`);
