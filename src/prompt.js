const Engineer = require('../lib/Engineer'),
  Intern = require('../lib/Intern'),
  Manager = require('../lib/Manager'),
  { mHTML, eHTML, iHTML } = require('./roles'),
  generateHTML = require('./html'),
  css = require('./css'),
  chalk = require("chalk"),
  inquirer = require("inquirer"),
  prompt = inquirer.createPromptModule(),
  fs = require("fs");


