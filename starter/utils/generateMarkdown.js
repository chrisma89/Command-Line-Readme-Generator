// function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = data.license ? `![License](https://img.shields.io/badge/license-${encodeURIComponent(data.license)}-blue?style=for-the-badge&logoColor=blue&labelColor=white)` : '';
  return `# ${data.title.trim()} ${licenseBadge}
  \n\n## About the Project: \n\n${data.description.trim()}\n\n## Table of Contents: \n\n1. Installation \n2. Usage \n3. License \n4. Contributing \n5. Tests \n6. Questions \n7. Credits \n8. Resources \n\n### Installation: \n\n${data.instalation.trim()}\n\n### Usage: \n\n${data.usage}\n\n### License: \n\nThe ${data.license} is in use for this repository.\n\n### Contributing: \n\nIf you would like to contribute towards this project, it would be most welcome.\n\n${data.contribute}\n\n### Tests: \n\nThe application can be tested using ${data.tests}.\n\n### Questions: \n\nI If you would like to get in touch through Github, you follow the link below to find my github page\n\nhttps://github.com/${data.github}
  \n\nIf you have additional questions, you can contact me through my email address : ${data.email}\n\n### Credits: \n\n${data.credits}\n\n### Resources: \n\n${data.resources}

`;
}

module.exports = generateMarkdown;
// Installation
// Usage
// License
// Contributing
// Tests
// Questions