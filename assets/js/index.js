// TODO: Include packages needed for this application
const { Console } = require('console');
const fs = require('fs');
const inquirer  = require ('inquirer');


// TODO: Create an array of questions for user input
const questions = [
'What is the title of your project?',
 'What is a short description of your project?', 
 'What is your table of contents?', 
 'How is your app installed?', 
 'What is its usage?', 
 'Any license?', 
 'Any contributors?', 
 'How can it be tested?', 
 'FAQs'
];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'dropdown',
      message: 'Any license?',
      name: 'licenses',
      choices: ['MIT', 'Apache', 'CCL', 'BSD', 'GNU','Unilicense'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
// TODO: Create a function to write README file
fs.writeToFile('readMeFile', 'utf8', data) {

}

// TODO: Create a function to initialize app
function init(goRead) {
if 
}

// Function call to initialize app
init(goRead);
