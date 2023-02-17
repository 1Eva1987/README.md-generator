const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please describe your your project shortly:",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide the installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Please describe the usage of your project: ",
    name: "usage",
  },
  {
    type: "list",
    message: "Please select the license you want to use for your project:",
    name: "license",
    choices: [
      "None",
      "Apache 2.0",
      "GNU General Publick v3.0",
      "MIT",
      "BSD 2-Clause 'simplified'",
      "BSD 3-Clouse 'New' or 'Revised'",
      "Boost Software 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public 2.0",
      "GNU Affero General Public v3.0",
      "GNU General Public v2.0",
      "GNU Lesser General Public v2.1",
      "Mozilla Public 2.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    message: "Please provide contribution guidlines:",
    name: "Contributing",
  },
  {
    type: "input",
    message: "Please provide testing instructions:",
    name: "tests",
  },
  {
    type: "input",
    message: " What is your GitHub username?",
    name: "userName",
  },
  {
    type: "input",
    message: "What is your e-mail address? ",
    name: "eMail",
  },
  {
    type: "input",
    message: "what is the URL the deployed repository?",
    name: "url",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("recieved");
  });
}

// function call to initialize program
init();
