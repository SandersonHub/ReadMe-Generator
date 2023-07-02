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
    type: "input",
    name: "install",
    message: "How do you install this project or view it?",
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
    message: "Email address:",
  },
];

// Write to README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Generate markdown
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

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
