// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    
  }
  else if(license ==="Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

    
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License
  ${
    renderLicenseBadge(data.license)
  }
  ## Table of contents
  - [Installation](##installation)
  - [Usage](#usage)
  - [Description](#description)
  - [License](#license)
  

## Description
${data.description}
${data.why}
${data.problem}
${data.learn}

## Installation
To install this application ,please follow the steps below
${data.install}

## Usage
![alt text](assets/images/screenshot.png)

## Contribution & credit
${data.contributors}

## Test


${data.test}

##  Questions
If you have any questions about the repo,you  can contact me at ${data.email}
You can find more of my work at [${data.github}](https://github.com/${data.github}/)


  

`;
}

module.exports = generateMarkdown;
