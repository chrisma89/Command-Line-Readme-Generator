// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title.trim()}\n\n## About the Project: \n\n${data.Description.trim()}\n\n## Table of Contents: \n\n1.Installation \n2.Usage \n3.License \n4.Contributing \n5.Tests \n6.Questions \n\n### Installation: \n${data.instalation.trim()}\n\n### Usage: \n${data.usage}

`;
}

module.exports = generateMarkdown;
// Installation
// Usage
// License
// Contributing
// Tests
// Questions