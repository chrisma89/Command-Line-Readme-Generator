const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { title } = require("process");

const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  
    {
      type : "input",
      message : "What is the title of the project",
      name : "title"
    },
    {
      type : "input",
      message : "Describe your project",
      name :"Description"
    },
    {
      type : "input",
      message : "Please input the installation process of the application",
      name : "instalation"
    },
    {
      type: "input",
      message : "Please input the usage steps for the application",
      name : "usage"
    },
    {
      type : "checkbox",
      message : "Please choose a License for your application",
      name : "license",
      choices : ["Apache License 2.0", "GNU General Public License v3.0", "MIT license", "Creative Commons Zero v1.0 Universal", "Eclipse Pulic Licese 2.0"]
},
{
  type : "input",
  message : "How do you want others to contribute towards this project. List them here",
  name : "contribute"
},

  

];

// function to write README file
function writeToFile(fileName, data) {
  return generateMarkdown(data)
}



// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then((data) => {
  const markDown = writeToFile("readme.md",data)
  return writeFileAsync("readme.md", markDown)})
  .then(() => console.log("Successfully wrote to the readme file"))
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