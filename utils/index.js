// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'ProjectTitle',
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'Description',
    },
      {
        type: 'input',
        message:'Please list the table of contents:',
        name:'TableofContents',
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
.then((answers) => {
    const readmeContent =`
    # ${answers.ProjectTitle}

    ## Description
    ${answers.Description}

    ## Table of Contents 
    ${answers.TableofContents}

    ## Installation
    ${answers.Installation}

    ## Usage 
    ${answers.Usage}

    ## Contributing
    ${answers.Contributing}

    ## License
    ${answers.License}

    ## Tests 
    ${answers.Tests}
    `;
fs.writeFile('README.md', readmeContent, (error) =>
error ? console.error(error) : console.log('Success!')
)
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
