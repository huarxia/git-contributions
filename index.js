#!/usr/bin/env node
/**
 * @file:      命令行获取githubcontributions
 * @author:    花夏(liubiao@itoxs.com)
 * @version:   V0.0.1
 * @date:      2017-08-15 18:18:20
 */

'use strict';
var deployer = require('./lib/contributions.js');
var path = require('path');
var fs = require('fs');
const repl = require('repl');
const chalk = require('chalk');
const util = require('./lib/util.js');
const replServer = repl.start({ prompt: '> ' });
replServer.defineCommand('contributions', {
  help: '.contributions 用户名 -> 可查看github的contributions',
  action(name) {
    this.lineParser.reset();
    this.bufferedCommand = '';
    util.getContributions(name);
    this.displayPrompt();
  }
});

