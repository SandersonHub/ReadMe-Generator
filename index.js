const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Name the title of your project!",
  },
  {
    type: "input",
    name: "description",
    message: "What is this project?",
  },
  {
    type: "checkbox",
    name: "license",
    message: "what license works for this project?",
    choices: ["MIT", "Apache 2.0", "GPL-3.0", "Other"],
  },
  {
    type: "input",
    name: "install",
    message: "To install or view this project, follow these steps",
  },
  {
    type: "input",
    name: "Usage",
    message: "How is this app useful?",
  },
  {
    type: "input",
    name: "help",
    message: "Who helped you along the way?",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide any test instructions!",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your Email address:",
  },
];

// Write to README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Generate markdown
function generateMarkdown(data) {
  let LicenseBadge = "";
  if (data.license.length > 0) {
    
    // License selector
    const selectedLicense = data.license[0];

    // Created a badge based on the selected license
    if (selectedLicense === "MIT") {
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (selectedLicense === "Apache 2.0") {
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (selectedLicense === "GPL-3.0") {
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (selectedLicense === "Other") {
      licenseBadge = "[![License: Other](https://img.shields.io/badge/License-Other-lightgrey.svg)](https://opensource.org/licenses/)";
    }
  }

  //README file thats generated
   return `
# ${data.title}

## Description
${data.description}

## License
${data.license}

## Installation
To install or view this project, follow these steps:
${data.install}

## Usage
This app is useful because ${data.Usage}.

## Contributors
Special thanks to ${data.help} for their contributions to this project.

## Tests
To test the project, follow these instructions:
${data.tests}

## Questions
If you have any questions, feel free to reach out to me via GitHub or email.

GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})

Email: ${data.email}
`;
}

// Initialize the application
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log('Creating readme file');
    writeToFile("./readme.md", generateMarkdown(responses));
  });
}

// Run the application
init();
