// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        name: 'Description',
    },
      {
        type: 'input',
        message:'Please list the table of contents:',
        name:'Table of Contents',
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
        name:'Contributing',
    },
    {
        type: 'input',
        message:'What license are you using for this project?',
        name:'License',
    },
        {
        type: 'input',
        message:'Please include test instructions:',
        name:'Tests',
    },

])

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

fs.readFile('inquirer', 'uft8', (error, data) =>
error ? console.error(error) : console.log(data)
);

fs.writeFile('README.md', process.argv[2], (error) =>
error ? console.error(error) : console.log('Success!')
);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
