#!/usr/bin/env node
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute command: ${command}`, error);
    return false;
  }

  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/nparashar150/thestartuptemplate ${repoName}`;
const installCommand = `cd ${repoName} && pnpm install`;

console.log(`Cloning the repository...`);
const checkOut = runCommand(gitCheckoutCommand);

if (!checkOut) process.exit(-1);

console.log(`Installing dependencies...`);
const install = runCommand(installCommand);

if (!install) process.exit(-1);

console.log(`All done!`);
console.log(`cd ${repoName} && pnpm start`);
