<div align="center">

# DevTeam Profile Generator 📧👩
![GitHub license](https://img.shields.io/badge/License-MIT-blue)

#### 📍 [View Demo on GitHub Pages](https://katsign.github.io/devteam/) 📍
</div>

### This command line application generates a styled webpage containing your development team's contact info and professional roles.

## *Table of Contents*

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [Tests](#tests)
- [Contact](#contact)

## *Description*
Keep track of your development team's contact information using this clean color-coded interface, no coding involved. Simply invoke the app on the command line and plug in your information through a series of prompts — behind the scenes, DevTeam whips up a styled HTML page ready for deployment to your team. You'll need to follow the installation steps below to get going.

## *Installation*
### Navigate into the repository folder on your local machine and open the built-in terminal. You will need Node.js installed to run this application.
- On the command line, type `npm i` to pull the app's dependencies to your local. If this action is successful, a `node_modules` folder will appear in the root folder.
- Now, you can type `node index.js` to start the application.

## *Usage*
### :movie_camera: [This video](https://vimeo.com/515063802) demonstrates the full functionality and testing of this app.
- The application begins with a Start menu. Select `'Continue'` to trigger the Inquirer prompts and begin adding the information for the `Team Manager`.
- You will then be prompted to `'Add another employee?'` to which you can either choose to `'Add Engineer'` or `'Add Intern,'` or opt to `'No, finish.'`
- When you are finished adding employees and choose `'No, finish.'` a message displays in the command line pointing you to the `/output` folder.
- This is where your output `index.html` and `style.css` files will be! :star:

## *Screenshots*
![Screenshot of DevTeam Mock Profile](./assets/screenshots/ss1.png)
Responsive Flex Breakpoint            |  Queried Flex-Direction Switch
:-------------------------:|:-------------------------:
![Screenshot of DevTeam Mock Profile](./assets/screenshots/ss3.png)  |  ![Screenshot of DevTeam Mock Profile](./assets/screenshots/ss4.png)

![Screenshot of DevTeam Command Line Prompt Questions](./assets/screenshots/ss2.png)

## *Contributing*
Contributing is welcome, raise issues and submit through pull requests.

## *Tests*

The tests in this repository are run through Jest, a dev dependency included in the JSON package. For the parent Employee constructor and the three subclasses, I wrote some simple TDD-inspired functions.
- Run these tests with the command `npm run test` in the `/_tests` folder.

![Screenshot of Jest PASS notices, 7 out of 7](./assets/screenshots/jest.PNG)
### :movie_camera: View these tests passing in real time in [this video](https://vimeo.com/515063802).

## *Contact*
🔗 Links in Bio @[katsign](https://github.com/katsign)

![Email Badge](https://img.shields.io/badge/Email%20Me-mailtokatsign%40gmail.com-d8bfd8)

---
This project is MIT licensed. &copy; 2021
