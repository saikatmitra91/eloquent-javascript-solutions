var inquirer = require('inquirer');

var questions = [{
    type: 'input',
    name: 'number',
    message: 'Enter a number'
}];


inquirer.prompt(questions).then(function(answers) {
    var number = parseInt(answers.number);
    if (isEven(number)) {
        console.log('The number is even');
    } else {
        console.log('The number is odd');
    }
});

function isEven(number) {
    if (number > 1 || number < 0) {
        if (number < 0) {
            return isEven(number + 2)
        } else {
            return isEven(number - 2);
        }
    } else {
        return (number === 0);
    }
}
