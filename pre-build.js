const executeProcess = require('child_process');
const fs = require('fs');

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

writeCommitHashToEnv();
