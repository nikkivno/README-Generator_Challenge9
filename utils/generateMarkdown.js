// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License'){
    return 'https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT'
  } else if (license === 'Apache 2.0') {
   return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
  } else if (license === 'BSD 3-Clause License') {
    return 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause'
  } else if (license === 'Mozilla Public License 2.0') {
    return 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0'
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return 'https://opensource.org/license/mit/'
  } else if (license === 'Apache 2.0') {
    return 'https://opensource.org/license/apache-2-0/'
   } else if (license === 'BSD 3-Clause License') {
     return 'https://opensource.org/license/bsd-3-clause/'
   } else if (license === 'Mozilla Public License 2.0'){
     return 'https://opensource.org/license/mpl-2-0/'
  } else if (license === 'N/A') {
    return 'No Applicable Licenses attached to this project'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT License') {
    return `## License
    
    This project is licensed under the [MIT License] ([MIT License](https://opensource.org/licenses/MIT).`; 
  } else if (license === 'Apache 2.0') {
    return `## License 

    This project is license under the [Apache License 2.0](https://opensource.org/license/apache-2-0/)`
  } else if (license === 'BSD 3-Clause License') {
    return `## License

This project is licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).`;
  } else if (license === 'Mozilla Public License 2.0') {
    return `## License

This project is licensed under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0).`;
  } else {
    return ''; // Empty string if there is no license
  }
}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;

function generateMarkdown(data) {
  return `# ${data.ProjectTitle}

## Description
${data.Description}

## Installation
${data.Installation}

## Usage
${data.Usage}

## Contributing
${data.Contributing}

## License
${data.License}

## Tests
${data.Tests}

## Questions
If you have any questions, you can reach out to me at:
Github: ${data.Questions}
Email: ${data.Email}
`;
}

module.exports = generateMarkdown;