// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'Project Title',
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'Project Description',
    },
    {
        type: 'input',
        message:'What are the steps required to install your project?',
        name:'Installation',
    },
    {
        type: 'input',
        message:'Provide intructions and examples for use',
        name:'Usage',
    },
    {
        type: 'input',
        message:'Do you have any collaborators to credit?',
        name:'Credits',
    },
    {
        type: 'input',
        message:'What license are you using for this project?',
        name:'License',
    },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
