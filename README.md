# Command-Line-Readme-Generator
The Command-Line-Readme-Generator is an application for creating consistent high quality professional README.ms files easily using the Command Line Interface(CLI). In this application, the CLI is making use of NODE.js to take user input to write to a file, particularly creating a README.md file and populating its content based on the user's input. 

The app has been developed using NODE.js and node modules such as fs, path, util, inquirer. NODE.js was installed in the computer and the starter files from bootcamp spot has been used to get started on creating the app. Javascript code has been written and modularisation has been used to export functions between the javascript files within the repo. Template literals have been used to hard code some elements of the README and to take in user data.

The inquirer package has been used to prompt the user with hardcoded questions. The 'input' and 'checkbox' types have been to used to get user data. Shield.io website has been used to create the badge for the license chosen by the user and the license has been made to be displayed near the top of the file. The table of contents has a summary of the available sections and are clickable, when clicked they would take the user to the relevant sections.

The github and email links created based on the user input is also clickable and will take the reader to the corresponding pages.


## Built with

This repository has been built using

- Javascript
- ES6
- Git
- Github
- Node.js
- Inquirer.js
- fs.js
- CLI
- shield.io

## Resources:
- https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/
- https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
- https://dev.to/mlkrsrc/how-to-make-custom-badges-to-improve-your-markdown-documents-460k
- https://anvilproject.org/guides/content/creating-links#:~:text=Markdown%20syntax%20for%20a%20hyperlink,the%20parentheses%20hold%20the%20link.
- https://www.w3schools.io/file/markdown-links/?utm_content=cmp-true

### Installation

To get started on creating a README file, Node.js can be installed through visiting https://nodejs.org/en . This will also install the npm (Node Package Manager)
The package.json can be initialized through entering npm init command on the CLI.
To install the inquirer package:  'node i inquirer' command is executed through the command line.
The upon executing the 'node index.js' command, the prompts for the readme generator should start
The code can be viewed at github: https://github.com/chrisma89/Command-Line-Readme-Generator

### Usage

This application is a great tool for creating a high qulity professional README file and ensures that all the important sections are added through prompts using the inquirer package.

### Credits

Thanks tot he curriculum team behind BCS for the starter files.
Thanks to the instructor, Laura Cole, for expalining the project and its requirements.

### Licence

The standard MIT Licence is in use for this repository.