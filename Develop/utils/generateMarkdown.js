// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
  ## ${data.title}

  http://github.com/${data.userName}/${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  The following necessary dependencies must be installed to run the application: ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contributors

  Contributors: ${data.contribute}

  ## Tests

  The following is needed to run the test: ${data.tests}

  ## Questions

  If you have any questions about the repo contact me at http://github.com/${data.Github} or email me ${data.email}

`;
}

module.exports = generateMarkdown;