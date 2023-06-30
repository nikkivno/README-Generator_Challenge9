// NPM Packages
const inquirer = require('inquirer');
const fs = require('fs');

// Questions and Answers/Writing File
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
        type: 'list',
        message:'What license are you using for this project?',
        choices: [
            'MIT License', 
            'Apache License', 
            'BSD License', 
            'Mozilla Public License',
            'N/A' 
        ],
        name:'License',
    },
        {
        type: 'input',
        message:'Please include test instructions:',
        name:'Tests',
    },
    {
        type: 'input',
        message:'What is your github username?',
        name:'Questions',
    },
        {    
        type: 'input',
        message: 'What is your email?',
        name:'Email',
    },
])
.then((answers) => {
    const readmeContent = `
# ${answers.ProjectTitle}

## Description
${answers.Description}

## Table of Contents
 

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

## Questions
${'If you have any questions you can reach out to me at:'} \n
${'Github: ' + answers.Questions} \n
${'Email: ' + answers.Email}
`;

fs.writeFile('README.md', readmeContent, (error) =>
error ? console.error(error) : console.log('Success!')
)
})
