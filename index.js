#!/usr/bin/env node

const args = process.argv.slice(2);

// Execute command with args
const exec = require('child_process').exec;
exec(`dir ${args}`, { cwd: process.cwd() }, (error, stdout, stderr) => {
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