var inquirer = require('inquirer');

var questions = [{
    type: 'input',
    name: 'first_number',
    message: 'Enter first number'
}, {
    type: 'input',
    name: 'second_number',
    message: 'Enter second number'
}];


inquirer.prompt(questions).then(function(answers) {
    answers.first_number = parseInt(answers.first_number);
    answers.second_number = parseInt(answers.second_number);
    if (answers.first_number < answers.second_number) {
        console.log('first number (', answers.first_number, ') is smaller');
    } else {
        console.log('second number (', answers.second_number, ') is smaller');
    }
});
