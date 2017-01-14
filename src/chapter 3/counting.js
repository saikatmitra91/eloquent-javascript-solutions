var inquirer = require('inquirer');

var questions = [{
    type: 'input',
    name: 'string',
    message: 'Enter Text'
}, {
    type: 'input',
    name: 'char',
    message: 'Enter the character to find the number of occurence'
}];


inquirer.prompt(questions).then(function(answers) {
    var count = countChar(answers.string, answers.char);
    console.log(count.toString(), "occurences in the text.");
});


function countChar(str, ch) {
    var count = 0;
    Array.prototype.forEach.call(str, function(strChar) {
        if (strChar === ch) {
            count++;
        }
    });
    return count;
}
