// Functions to get license badge
function generateLicense(license) {
  if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GNU General Publick v3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "BSD 2-Clause 'simplified'") {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  } else if (license === "BSD 3-Clouse 'New' or 'Revised'") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === "Boost Software 1.0") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license === "Creative Commons Zero v1.0 Universal") {
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else if (license === "Eclipse Public 2.0") {
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-2.0)`;
  } else if (license === "GNU Affero General Public v3.0") {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (license === "GNU General Public v2.0") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license === "Mozilla Public 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else return ``;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${generateLicense(data.license)}

## Contents

  [Description](#description) 
  
  [Installation](#installation) 

  [Usage](#usage) 

  [Contributing](#conributing) 

  [Tests](#tests) 
  
  [Questions](#questions)

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
