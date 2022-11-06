// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Instert the TITLE of your project",
        name: "Title"
    }, {
        type: "input",
        message: "Give a detailed DESCRIPTION of your project",
        name: "Description"
    }, {
        type: "input",
        message: "Table of Contents.",
        name: "Table of Contents"
    }, {
        type: "input",
        message: "Tell the user what does he need to install before run the app",
        name: "Installation"
    }, {
        type: "input",
        message: "Indicate the user how to use the app",
        name: "Usage"
    }, {
        type: "input",
        message: "What liscence is being used? (ie...MIT)",
        name: "License"
    }, {
        type: "input",
        message: "Who contributed to this project?:",
        name: "Contributing"
    }, {
        type: "input",
        message: "What commands are needed to test this app?",
        name: "Tests"
    }, {
        type: "input",
        message: "Contact info for inquiries.",
        name: "Questions"
    }, {
        type: 'input',
        message: 'Insert your Github username',
        name: 'Username'
    }, {
        type: 'input',
        message: 'Instert your email',
        name: 'Email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if(err) {
            return console.log(err)
        } else {
            console.log("SUCCESS!")
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md",generateMarkdown(data));
        console.log(data);
    })
};

// Function call to initialize app
init();
