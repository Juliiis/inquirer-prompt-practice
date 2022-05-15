//this is what I want to see in to console
const inquirer = require('inquirer');
const whatColourIs = require('./game')

const questions = [{type: 'input', name: 'name', message: "What's your name?"}, 
                   {type: 'number', name: 'age', message: "What's your age?"},
                   {type: 'input', name: 'colour', message: "what is your favourite colour?"}];
  

const main = async () => {
    const { name, age, colour } = await inquirer.prompt(questions)
    console.log(`Hi ${name}`);
    console.log(`you have ${age} years`);
    console.log(`${whatColourIs(colour)}`)
}

main()