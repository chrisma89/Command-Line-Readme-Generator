const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { title } = require("process");

const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of the project",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your project",
    name: "description",
  },
  {
    type: "input",
    message: "Please input the installation process of the application",
    name: "installation",
  },
  {
    type: "input",
    message: "Please input the usage steps for the application",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "Please choose a License for your application",
    name: "license",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT license",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Pulic Licese 2.0",
    ],
  },
  {
    type: "input",
    message:
      "How do you want others to contribute towards this project. List them here",
    name: "contribute",
  },
  {
    type: "input",
    message: "How can this application be tested?",
    name: "tests",
  },
  {
    type: "input",
    message: "Please enter your guthub username",
    name: "github",
  },
  {
    type: "input",
    message: "Please enter your email address",
    name: "email",
  },
  {
    type: "input",
    message: "Add credits here",
    name: "credits",
  },
  {
    type: "input",
    message: "Add resources here",
    name: "resources",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return writeFileAsync(fileName, generateMarkdown(data));
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      return writeToFile("./output/SAMPLEREADME.md", data);
    })
    .then(() => console.log("Successfully wrote to the readme file"))
    .catch((err) => console.log(err));
}

// function call to initialize program
init();
