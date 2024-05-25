#!/usr/bin/env node
import { execSync } from "child_process";
import readline from "readline";

const log = (logMessage) => console.log("\x1b[32m%s\x1b[0m", logMessage);
const logError = (logMessage) => console.log("\x1b[31m%s\x1b[0m", logMessage);
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
const getEmailArgument = () => {
  for (const arg of process.argv) if (arg.startsWith("--email=")) return arg.split("=")[1];
  return null;
};

const email = getEmailArgument() || "default@thestartup.template";
const isDefaultEmail = email === "default@thestartup.template";

const BRANCH_MAP = {
  1: "turbo-website",
  2: "website"
};

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    logError(`Failed to execute command: ${command}`);
    return false;
  }

  return true;
};

const repoName = (await prompt("Enter the name of project (default: thestartuptemplate): ")) || "thestartuptemplate";
const repoBranch =
  (await prompt(`Which branch do you want to clone? (default: 1): 
  1. Turborepo setup
  2. Nextjs setup (coming soon)
`)) || "1";

// TODO: add repo branch 
const gitCheckoutCommand = `git clone --depth 1 -b ${BRANCH_MAP[1] || "main"} --single-branch https://github.com/nparashar150/thestartuptemplate ${repoName}`;
const gitRemoveRemote = `cd ${repoName} && git remote remove origin`;
const installCommand = `cd ${repoName} && pnpm install`;
const dbPath = `cd ${repoName}/packages/db`;

log(`Cloning the repository...`);
const checkOut = runCommand(gitCheckoutCommand);

if (!checkOut) process.exit(-1);

log(`\nRemoving remote origin...`);
const removeRemote = runCommand(gitRemoveRemote);

!isDefaultEmail && log(`\nWelcome ${email}!`);
log("Fetching the latest template configuration...");
const fetchConfig = `curl  --output config.json "https://side.quik.run/api/config?email=${email}&config_only=true"`;
const fetchConfigStatus = runCommand(fetchConfig);
if (!fetchConfigStatus) process.exit(-1);
const updateConfig = `cd ${repoName} && cp ../config.json apps/website/config.json`;
const updateConfigStatus = runCommand(updateConfig);
if (!updateConfigStatus) process.exit(-1);

if (!removeRemote) process.exit(-1);

log(`\nInstalling dependencies...`);
const install = runCommand(installCommand);

if (!install) process.exit(-1);

log(`\nInitializing EdgeDB...`);
runCommand(`${dbPath} && npx edgedb project init`);
// if init error saying already initialized, ignore it

log(`Setting up EdgeDB...`);
const edgedbGenerate = runCommand(`${dbPath} && pnpm generate`);
if (!edgedbGenerate) process.exit(-1);

runCommand(`cd ${repoName} && cp env.example .env`);
runCommand(`cd ${repoName} && cp env.example apps/website/.env`);

log(`\nAll done!`);
log(`cd ${repoName} && pnpm dev`);
log(`Please update the .env file with your credentials.\n`);
log(`\nRead our documentation at https://docs.side.quik.run/tutorials/playground-builder`);
log(`Happy coding!`); 

rl.close();
