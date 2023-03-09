require('dotenv').config();
const executeProcess = require('child_process');
const fs = require('fs');
const { printAndExit } = require('next/dist/server/lib/utils');
const fetch = require('node-fetch');

const getCommitHash = () => {
  let result = undefined;
  try {
    result = executeProcess.execSync('git rev-parse --short HEAD 2>&1').toString().trim();
  } catch (e) {
    console.error('Cannot define build id: ', e);
  }
  return result;
};

const writeCommitHashToEnv = () => {
  fs.writeFileSync('.env.production.local', `NEXT_PUBLIC_EXT_BUILD_ID=${getCommitHash()}`);
};

const checkBackend = async () => {
  const path = process.env.NEXT_PUBLIC_FRONTASTIC_HOST + '/status/extensionrunner';
  console.log('Calling ' + path);
  const actualInit = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Frontastic-Access-Token': getCommitHash(),
    },
  };

  return await fetch(path, actualInit).then(async (response) => {
    const responseObj = await response.json();
    console.log('Extension response: ', responseObj);
    return responseObj.up;
  });
};

const waitForBackend = async () => {
  for (let i = 0; i < 10; i++) {
    const attempt = i + 1;
    console.log('Checking if extension is up, attempt: ', attempt);
    const up = await checkBackend();
    if (!up) {
      console.error('Extension is not available, waiting for', attempt, 'seconds');
      executeProcess.execSync('sleep ' + attempt);
    } else {
      console.log('Extension is up!');
      return;
    }
  }

  printAndExit('Extension is not up, aborting!', 2);
};

writeCommitHashToEnv();
waitForBackend();
