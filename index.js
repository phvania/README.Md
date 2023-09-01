// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"what is the tilte of your application?",
        name:"title"
    },
    {
        type:"input",
        message:"please describe  your application?",
        name:"description"
    }, 
    {
        type:"input",
        message:"why did you build this application?",
        name: "why"
    },
    {
       type:"input" ,
       message:"what did you learn?",
       name:"learn"
    },
    {
        type: "input",
        message:"what this application is  for?",
        name: "problem"
    },
    {
        type:"input",
        message:"How to use this application?",
        name:"use"
    },
    {
        type:"input",
        message:"How can a user install this application?",
        name:"install"
    },
    {
        type:"input",
        message:"How can other developers contribute?",
        name:"contributors"
    },
    {
        type:"input",
        message:"how can a  user test the application?",
        name:"test"
    },
    {
        type:"input",
        message:"Add your github so user can ask questions",
        name:"github"
    },
    {
        type:"input",
        message:"what is your contact information?",
        name:"email"
    },
    {
        type:"input",
        message:"what is your table of contents URL?",
        name:"link"
    },
    
     {
        type:"list",
        message:"please select the license for this application",
        name:"license",
        choices:["MIT","Mozilla","apache"]
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(
        questions
    ).then(data => {
fs.writeFileSync('index.md', generateMarkdown(data))
      } )
}

// Function call to initialize app
init();
