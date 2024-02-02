const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { title } = require("process");

// array of questions for user
const questions = [
  [
    {
      type : "input",
      message : "What is the title of the project",
      name : "title"
    }
  ]

];

// function to write README file
function writeToFile(fileName, data) {
  
}



// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then((data) => writeFileAsync("./output/readme.md", writeToFile(data) ))
  .then(() => console.log("Successfully wrotebto the readme file"))
  .catch((err) => console.error(err))
}

// function call to initialize program
init();

// // ------------
// 1. Project title
// 2. Project Description(whar does the app do, technology used, challegenes face and features to be implemeted)
// 3.Table of Contents
// 4.How to install and run the Project - step by step guide
// 5. How to use the app- screenshots etc 
// 6. CRedits
// 7. Licence
// 8. Badges
// 9. How to contribute tot he Project
// 10. resources?
// 11. features
// 12. tests.