const Engineer = require('../lib/Engineer'),
  Intern = require('../lib/Intern'),
  Manager = require('../lib/Manager'),
  { mHTML, eHTML, iHTML } = require('./roles'),
  genHTML = require('./html'),
  css = require('./css'),
  Chalk = require('chalk'),
  inquirer = require('inquirer'),
  prompt = inquirer.createPromptModule(),
  fs = require('fs');

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
        switch (data.newEmployee) {
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
                    break;
                    case 'No, finish.':
                        let html = genHTML(team);
                        fs.writeFileSync('./dist/index.html', html, 'utf8');
                        fs.writeFileSync('./dist/style.css', css, 'utf8');
                        return console.log(
                            Chalk.black.bgCyan('Your DevTeam profile is ready. Navigate to the /dist folder.')
                        );
        }
    })
    .catch((err) => {
        throw new Error(
            `Something went wrong.\n${err}`
        );
    });
}
//This one gets called first from index.js and uses the next employee function above until the finish case is chosen.
function init() {
    prompt([
        {
            message: `${Chalk.bgMagenta('Enter the name of the team manager.')}`,
            name: 'managerName',
        },
        {
            message: `${Chalk.bgMagenta('Enter the ID number of the team manager.')}`,
            name: 'managerID',
        },
        {
            message: `${Chalk.bgMagenta('Enter the email address of the team manager.')}`,
            name: 'managerEmail',
        },
        {
            message: `${Chalk.bgMagenta('Enter the office number of the team manager.')}`,
            name: 'managerOffice',
        },
    ])
    .then((data) => {
        const manager = new Manager(
            data.managerName,
            data.managerID,
            data.managerEmail,
            data.managerOffice
        );
        team.push(mHTML(manager));

        nextEmployee();
    })
    .catch((err) => {
        throw new Error(
            `Something went wrong.\n${err}`
        );
    });
}

module.exports = init;