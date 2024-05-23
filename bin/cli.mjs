#!/usr/bin/env node
import { execSync } from "child_process";
import readline from "readline";

const log = (logMessage) => console.log("\x1b[32m%s\x1b[0m", logMessage);
const logError = (logMessage) => console.log("\x1b[31m%s\x1b[0m", logMessage);
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

const BRANCH_MAP = {
  1: "turbo-website-blog",
  2: "turbo-website",
  3: "website",
  4: "blog",
}

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    logError(`Failed to execute command: ${command}`);
    return false;
  }

  return true;
};

const repoName = await prompt("Enter the name of project (default: thestartuptemplate): ") || "thestartuptemplate";
const repoBranch = await prompt(`Which branch do you want to clone? (default: 1): 
  1. turbo-website-blog
  2. turbo-website
  3. website
  4. blog
`) || "1";

const gitCheckoutCommand = `git clone --depth 1 -b ${BRANCH_MAP[repoBranch] || "turbo-website-blog"} --single-branch https://github.com/nparashar150/thestartuptemplate ${repoName}`;
const gitRemoveRemote = `cd ${repoName} && git remote remove origin`;
const installCommand = `cd ${repoName} && pnpm install`;
const dbPath = `cd ${repoName}/packages/db`;

log(`Cloning the repository...`);
const checkOut = runCommand(gitCheckoutCommand);

if (!checkOut) process.exit(-1);

log(`Removing remote origin...`);
const removeRemote = runCommand(gitRemoveRemote);

if (!removeRemote) process.exit(-1);

log(`Installing dependencies...`);
const install = runCommand(installCommand);

if (!install) process.exit(-1);

log(`Initializing EdgeDB...`);
runCommand(`${dbPath} && npx edgedb project init`);
// if init error saying already initialized, ignore it

log(`Setting up EdgeDB...`);
const edgedbGenerate = runCommand(`${dbPath} && pnpm generate`);
if (!edgedbGenerate) process.exit(-1);

log(`Cloning env example...`);
runCommand(`cd ${repoName} && cp env.example .env`);
runCommand(`cd ${repoName} && cp env.example apps/website/.env`);
runCommand(`cd ${repoName} && cp env.example apps/blogs/.env`);

log(`\nAll done!\n`);
log(`cd ${repoName} && pnpm dev\n`);
log(`Please update the .env file with your credentials.\n`);
log(`Happy coding!`);

rl.close();
