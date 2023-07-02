const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");

//console.log("read me");

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



//Write to README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  


//init install
function init() {
    inquirer.prompt(questions).then((Responses) => {
      console.log('create readme file');
      writeToFile("./readme.md", generateMarkdown({ Responses }));
    });
  }
  