const Engineer = require('../lib/Engineer'),
  Intern = require('../lib/Intern'),
  Manager = require('../lib/Manager'),
  { mHTML, eHTML, iHTML } = require('./roles'),
  generateHTML = require('./html'),
  css = require('./css'),
  Chalk = require("chalk"),
  inquirer = require("inquirer"),
  prompt = inquirer.createPromptModule(),
  fs = require("fs");

let team = [];

function nextEmployee() {
    prompt([
        {
        type: 'list',
        message: `${Chalk.black.bgCyan(
            'Would you like to add another employee?'
        )}`,
        choices: ['Engineer', 'Intern', new inquirer.Separator(), 'No, finish.'],
        name:'newEmployee',
        },
    ])
    .then((data) => {
        switch (data.addEmployee) {
            case 'Engineer':
                prompt([
                    {
                        message: `${Chalk.black.bgGreen('Enter the name of the engineer.')}`,
                        name: 'engineerName',
                    },
                    {
                        message: `${Chalk.black.bgGreen('Enter the ID number of the engineer.')}`,
                        name: 'engineerID',
                        },
                    {
                        message: `${Chalk.black.bgGreen('Enter the email address of the engineer.')}`,
                        name: 'engineerEmail',
                    },
                    {
                        message: `${Chalk.black.bgGreen('Enter the Github username of the engineer.')}`,
                        name: 'engineerGH',
                    },
                ]).then((data) => {
                    const newEngineer = new Engineer(
                        data.engineerName,
                        data.engineerID,
                        data.engineerEmail,
                        data.engineerGH
                    );
                    team.push(eHTML(newEngineer));
                    nextEmployee();
                });
                break;
                case 'Intern':
                    prompt([
                        {
                            message: `${Chalk.black.bgYellow('Enter the name of the intern.')}`,
                            name: 'internName',
                        },
                        {
                            message: `${Chalk.black.bgYellow('Enter the ID number of the intern.')}`,
                            name: 'internID',
                            },
                        {
                            message: `${Chalk.black.bgYellow('Enter the email address of the intern.')}`,
                            name: 'internEmail',
                        },
                        {
                            message: `${Chalk.black.bgYellow('Enter the school of the intern.')}`,
                            name: 'internSchool',
                        },
                    ]).then((data) => {
                        const newIntern = new Intern(
                            data.internName,
                            data.internID,
                            data.internEmail,
                            data.internSchool
                        );
                        team.push(iHTML(newIntern));
                        nextEmployee();
                    });
        }
    })
}
