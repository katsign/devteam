const inquirer = require('inquirer');
const chalk = require('chalk');
const init = require('./src/prompts');

const prompt = inquirer.createPromptModule();

prompt([
    {
      type: 'list',
      message: `${chalk.black.bgCyan}(
        'Welcome. Should we start building your DevTeam?'
      )}`,
      choices: ['Start', 'Not Ready'],
      name: "start",
    },
  ]).then((response) => {
    switch (response.start) {
      case 'Start':
        init();
        break;
      case 'Not Ready':
        return console.log(chalk.black.bgRed('Restart application and try again.'));
    }
  });