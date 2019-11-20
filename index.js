#!/usr/bin/env node

const commander = require('commander');
const pkg = require('./package.json');
const program = new commander.Command();

// Set version
program.version(pkg.version);

// Parse args
program.parse(process.argv);

// Execute command with args
var exec = require('child_process').exec;
exec(`dir ${program.args}`, { cwd: process.cwd() }, (error, stdout, stderr) => {
  if(stderr){
    console.log(stderr);
    return;
  }
  if(error){
    console.log(error);
    return;
  }
  console.log(stdout);
});