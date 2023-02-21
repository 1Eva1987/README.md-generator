// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [Description](#description) [Installation](#installation) [Usage](#usage) [Contributing](#conributing) [Tests](#tests) [Questions](#questions)

## Description 

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Conributing

${data.contributing}

## Tests

${data.tests}

## Link

${data.url}

## License

${data.license}

## Questions

You can find my GitHub profile if you click the link below 
https://github.com/${data.userName}
Or if you have any questions please send me the email :
${data.eMail}
`;
}

module.exports = generateMarkdown;

//     * When a user enters their GitHub username then this is added to the section of the README
//  entitled Questions, with a link to their GitHub profile
//     * When a user enters their email address then this is added to the section of the
//  README entitled Questions, with instructions on how to reach them with additional questions
//     * When a user clicks on the links in the **Table of Contents** then they are taken
// to the corresponding section of the README
//  * When a user enters the project title then it is displayed as the title of the README
//     * When a user enters a description, installation instructions, usage information,
//  contribution guidelines, and test instructions then this information is added to the sections
//  of the README entitled Description, Installation, Usage, Contributing, and Tests
//     * When a user chooses a license for their application from a list of options then a
//  badge for that license is added near the top of the README and a notice is added to the section
// of the README entitled **License** that explains which license the application is covered under
