const inquirer = require('inquirer');
const Chalk = require('chalk');
const init = require('./src/prompt');

const prompt = inquirer.createPromptModule();

prompt([
    {
        type: 'list',
        message: `${Chalk.black.bgCyan(
            'Welcome. Select continue to start building your DevTeam.'
        )}`,
        choices: ['Continue', 'Quit'],
        name: 'start',
    },
]).then((response) => {
    switch (response.start) {
        case 'Continue':
            init();
            break;
        case 'Quit':
            return console.log('Restart the application and try again.');
    }
});