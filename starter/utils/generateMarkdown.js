// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title.trim()}\n\n## About the Project: \n\n${data.Description.trim()}

`;
}

module.exports = generateMarkdown;
