#!/usr/bin/env node
import { execSync } from "child_process";

const log = (logMessage) => console.log("\x1b[32m%s\x1b[0m", logMessage);
const logError = (logMessage) => console.log("\x1b[31m%s\x1b[0m", logMessage);

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    logError(`Failed to execute command: ${command}`);
    return false;
  }

  return true;
};

const repoName = process.argv[2] || "thestartuptemplate";
const gitCheckoutCommand = `git clone --depth 1 https://github.com/nparashar150/thestartuptemplate ${repoName}`;
const installCommand = `cd ${repoName} && pnpm install`;
const dbPath = `cd ${repoName}/packages/db`;

log(`Cloning the repository...`);
const checkOut = runCommand(gitCheckoutCommand);

if (!checkOut) process.exit(-1);

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

log(`All done!`);
log(`cd ${repoName} && pnpm dev`);
log(`Happy coding!`);
