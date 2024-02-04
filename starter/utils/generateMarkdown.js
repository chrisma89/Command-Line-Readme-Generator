// function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = data.license ? `![License](https://img.shields.io/badge/${encodeURIComponent(data.license)}-blue?style=plastic&logoColor=white)` : '';

  return `# ${data.title.trim()}  ${licenseBadge}
  
## About the Project: 

${data.description.trim()}

## Table of Contents: 
1. [Installation](#installation)
2. [Usage](#usage) 
3. [License](#license) 
4. [Contributing](#contributing) 
5. [Tests](#tests)
6. [Questions](#questions) 
7. [Credits](#credits)
8. [Resources](#resources) 


### Installation 

${data.installation.trim()}\

### Usage 

${data.usage.trim()}

### License 

The ${data.license} is in use for this repository.

### Contributing 

If you would like to contribute towards this project, it would be most welcome.
${data.contribute.trim()}

### Tests 

The application can be tested using ${data.tests.trim()}.

### Questions 

If you would like to get in touch through Github, you follow the link below to find my github page [GitHub](https://github.com/${data.github.trim()}) 

If you have additional questions, you can contact me through my email address : [Email](mailto:${data.email.trim()})

### Credits 

${data.credits}

### Resources 

${data.resources}

`;
}

module.exports = generateMarkdown;
