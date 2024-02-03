// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title.trim()}\n\n## About the Project: \n\n${data.Description.trim()}\n\n## Table of Contents: \n\n1.Installation \n2.Usage \n3.License \n4.Contributing \n5.Tests \n6.Questions \n\n### Installation: \n\n${data.instalation.trim()}\n\n### Usage: \n\n${data.usage}\n\n### License: \n\nThe ${data.license} is in use for this repository.\n\n### Contributing: \n\nIf you would like to contribute towards this project, it would be most welcome.\n\n${data.contribute}\n\n### Tests: \n\nThe application can be tested using ${data.tests}.\n\n### Questions: \n\nI If you would like to get in touch through Github, you follow the link below to find my github page\n\nhttps://github.com/${data.github}
  \n\nIf you have additional questions, you can contact me through my email address : ${data.email}

`;
}

module.exports = generateMarkdown;
// Installation
// Usage
// License
// Contributing
// Tests
// Questions