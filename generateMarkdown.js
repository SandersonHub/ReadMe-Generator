function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Installation
  To install or view this project, follow these steps:
  ${data.install}
  
  ## Usage
  This app is useful because ${data.useful}.
  
  ## Contributors
  Special thanks to ${data.help} for their contributions to this project.
  
  ## Tests
  To test the project, follow these instructions:
  ${data.test}
  
  ## Questions
  If you have any questions, feel free to reach out to me via GitHub or email.
  
  GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
  
  Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
  