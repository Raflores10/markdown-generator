// // TODO: Include packages needed for this application
// // TODO: Create an array of questions for user input
// const questions = [];
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// // TODO: Create a function to initialize app
// function init() {}
// // Function call to initialize app
// init();
const fs = require('fs');
const inquirer = require('inquirer');

const writeMd = (title,badge1,badge2,badge,description,install,usage,credits,licenses,test)=>{
    return`
   
 # ${title}

## Badge
![${badge1} badge](https://img.shields.io/badge/${badge1}-${badge2}-${badge}.svg)

## Description
${description}

 ## Table of Content
 
- [Instalation](#install)
- [Usage](#usage)
- [Credits](#credits)
- [Licenses](#licenses)
- [Tests](#test)

## Instalation
${install}

## Usage
${usage}

## Credits
${credits}

## Licenses
${licenses}

 ## Tests
 ${test}

    `
}

inquirer.prompt([
    {
        type:'input',
        message:'Enter your username',
        name:'userName',
    },
    {
        type:'input',
        message:'Enter your github username:',
        name:'gitHub',
    },
    {
        type:'input',
        message:'Enter your project title:',
        name:'title',
    },
    {
        type:'input',
        message:'Enter a description for your project:',
        name:'description',
    },
    {
        type:'input',
        message:'Enter installation instructions for your project:',
        name:'install',
    },
    {
        type:'input',
        message:'Enter usage information for your project:',
        name:'usage',
    },
    {
        type:'input',
        message:'Enter contribution guidlines for your project:',
        name:'contribution',
    },
    {
        type:'input',
        message:'Enter test instructions for your project:',
        name:'test',
    },
    {
        type:'input',
        message:'Enter credits for this project:',
        name:'credits',
    },
    {
        type:'list',
        message:'What licence would you like to use for your project:',
        choices:["MIT License","Mozilla Public License 2.0","Apache License 2.0","GNU General Public License v3.0","None"],
        name:'licenses',
    },
    {
        type:'list',
        message:'Choose a badge color ',
        choices:["Blue","Green","Red","Yellow","Orange"],
        name:'badge',
    },
    {
        type:'input',
        message:'Enter badge1 information',
        name:'badge1',
    },
    {
        type:'input',
        message:'Enter badge2 information:',
        name:'badge2',
    },
    

]) .then(ans=>{
    fs.writeFile("README(assignment).md",writeMd(
        ans.title,
        ans.badge1,
        ans.badge2,
        ans.badgeColor,
        ans.description,
        ans.install,
        ans.credits,
        ans.usage,
        ans.licenses,
        ans.test),
        (err)=> {
            if (err) {
                console.log("Something went wrong");
            } else {
                 console.log("Input has been saved!")
            }
     })
});