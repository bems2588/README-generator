// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
  # ${data.title}
  http://github.com/${data.userName}/${data.title}
  #Description
  ${data.Description}
  #Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  #Installation
  The following necessary dependencies must be installed to run the application
  #Usage
  In order to use this app, ${data.usage}
  #License
  This project is licensed under the ${data.license} license.
  #Contributors
  Contributors: ${data.contributing}
  #Tests
  The following is needed to run the test: ${data.tests}
  #Questions
  If you have any questions about the repo, contact ${data.Github} or ${data.email}

`;
}

module.exports = generateMarkdown;