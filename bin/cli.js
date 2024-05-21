#!/usr/bin/env node
import { execSync } from "child_process";
import chalk from "chalk";

const log = console.log;

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    log(chalk.red(`Failed to execute command: ${command}`));
    return false;
  }

  return true;
};

const repoName = process.argv[2] || "thestartuptemplate";
const gitCheckoutCommand = `git clone --depth 1 https://github.com/nparashar150/thestartuptemplate ${repoName}`;
const installCommand = `cd ${repoName} && pnpm install`;
const dbPath = `cd ${repoName}/packages/db`

log(chalk.bold.green(`Cloning the repository...`));
const checkOut = runCommand(gitCheckoutCommand);

if (!checkOut) process.exit(-1);

log(chalk.green(`Installing dependencies...`));
const install = runCommand(installCommand);

if (!install) process.exit(-1);

log(chalk.green(`Setting up EdgeDB...`));
const edgedbGenerate = runCommand(`${dbPath} && pnpm generate`);
if (!edgedbGenerate) process.exit(-1);

log(chalk.green(`Cloning env example...`));
runCommand("pwd")
runCommand(`cd ${repoName} && cp env.example .env`);
runCommand(`cd ${repoName} && cp env.example apps/website/.env`);

log(chalk.green(`All done!`));
log(chalk.green(`cd ${repoName} && pnpm dev`));
log(chalk.green(`Happy coding!`));
