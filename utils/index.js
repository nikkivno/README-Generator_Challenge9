// NPM Packages
const inquirer = require('inquirer');
const fs = require('fs');


const generateMarkdown = require('./generateMarkdown');

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
            'Apache 2.0', 
            'BSD 3-Clause License', 
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
// connecting to generateMarkdown file
.then((answers) => {
    const readmeContent = generateMarkdown(answers);

    fs.writeFile('README.md', readmeContent, (error) =>
      error ? console.error(error) : console.log('Success!')
    );
  });

