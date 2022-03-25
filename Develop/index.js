// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// const questions = [];

const questions = [

    {
          type: 'input',
      name: 'title',
      message: "What is the title of your repository?"
    },
    {
      type: 'input',
      name: 'description',
      message: "What is your repository about? Please give a description."
    },
    {
      type: "input",
      name: "installation",
      message: "What installation are needed to run this app?(ie... dependencies)"
    },
    {
      type: "input",
      name: "usage",
      message: "How is the app used? Please give instructions"
    },
    {
      type: "confirm",
      name: "contribute",
      message: "Please state if others can contribute.",
      default: false
    },
    {
      type: "list",
      name: "license",
      message: "Please select which license you would like to use.",
      choices : [
          "APACHE 2.O",
          "BSD 3",
          "GVL-GPL 3.0",
          "MIT",
          "None"
      ], 
    },
    {
      type: "input",
      name: "tests",
      message: "What command is used to run this app?"      
    },
    {
      type: "input",
      name:"Github",
      message: "What is your Github username?"
    },
    {
      type: "input",
      name:"email",
      message: "What is your email address?"

    },
  ];


// // TODO: Create a function to write README file

function writeToFile(fileName,data) {

  fs.writeFile(fileName, data, function(err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err)
    } else {
      console.log('success')
    }
  });
};

// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(data){
    writeToFile("README.md", generateMarkdown(data));
    console.log(data)
  })
}

// // Function call to initialize app
init();

