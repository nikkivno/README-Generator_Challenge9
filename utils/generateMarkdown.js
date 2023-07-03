
function renderLicenseBadge(license) {
  if (license === 'MIT License'){
    return '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Apache 2.0') {
   return '![Apache 2.0 License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === 'BSD 3-Clause License') {
    return '![BSD License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
  } else if (license === 'Mozilla Public License 2.0') {
    return '![Mozilla License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
} else if (license === 'N/A') {
  return ''
}
}

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


function renderLicenseSection(license) {
  if (license === 'MIT License') {
    return `This project is licensed under the MIT License.\n
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: \n
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. \n
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`; 
  
  } else if (license === 'Apache 2.0') {
    return `This project is license under the Apache License 2.0.\n
    Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at \n
     http://www.apache.org/licenses/LICENSE-2.0\n
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.`
  
  } else if (license === 'BSD 3-Clause License') {
    return `This project is licensed under the BSD 3-Clause License\n
    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n
3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
  
} else if (license === 'Mozilla Public License 2.0') {
    return `This project is licensed under the Mozilla Public License 2.0\n
    Please refer to link for documentation:`;
  
  } else {
    return '';
  }
}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.License);
  const licenseLink = renderLicenseLink(data.License);
  const licenseSection = renderLicenseSection(data.License);

  const githubLink = `[${data.Questions}](https://github.com/${data.Questions})`

  return `# ${data.ProjectTitle}

${licenseBadge}

## Description
${data.Description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)


## Installation <a id='installation'></a>
${data.Installation}

## Usage <a id='usage'></a>
${data.Usage}

## Contributing <a id='contributing'></a>
${data.Contributing}

## License <a id='license'></a>
${licenseSection}\n
${licenseLink}

## Tests <a id='tests'></a>
${data.Tests}

## Questions <a id='questions'></a>
Want to see more of my work? You can check out my Github profile by clicking my username below!\n
Github: ${githubLink} \n
For any other questions or inquiries please feel free to reach out to my via email:\n
Email: ${data.Email}
`;
}

module.exports = generateMarkdown;