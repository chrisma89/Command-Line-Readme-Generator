// function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = data.license ? `![](https://img.shields.io/badge/${encodeURIComponent(data.license)}-blue?style=plastic&logoColor=white)` : '';

  return `# ${data.title.trim()}  ${licenseBadge}
  
## About the Project: 

${data.description.trim()}

## Table of Contents: 
1. Installation 
2. Usage 
3. License 
4. Contributing 
5. Tests 
6. Questions 
7. Credits 
8. Resources 


### Installation: 

${data.installation.trim()}\

### Usage: 

${data.usage.trim()}

### License: 

The ${data.license} is in use for this repository.

### Contributing: 

If you would like to contribute towards this project, it would be most welcome.
${data.contribute.trim()}

### Tests: 

The application can be tested using ${data.tests.trim()}.

### Questions: 

I If you would like to get in touch through Github, you follow the link below to find my github page[GitHub](https://github.com/${data.github.trim()}) 

If you have additional questions, you can contact me through my email address : [Email](mailto:${data.email.trim()})

### Credits: 

${data.credits}

### Resources: 

${data.resources}

`;
}

module.exports = generateMarkdown;
