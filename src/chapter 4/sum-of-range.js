var inquirer = require('inquirer');

var questions = [{
    type: 'input',
    name: 'range',
    message: 'Enter Range (e.g. 8-10)'
}, {
    type: 'input',
    name: 'step',
    message: 'Enter Step value (optional)'
}];


inquirer.prompt(questions).then(function(answers) {
    var range = answers.range.split("-");
    var step = answers.step || "0";
    var rangeValues = [];
    step = parseInt(step);
    range = range.map(Number);
    rangeValues = computeRangeValues(range[0], range[1], step);
    console.log('Sum is', sum(rangeValues));
});


function computeRangeValues(start, end, step) {
    var arr = [],
        value = start;
    step = step || 1;
    while (value !== end) {
        arr.push(value);
        value += step;
    }
    arr.push(value);
    return arr;
}

function sum(arr) {
    var sum = 0;
    arr.forEach(function(value) {
        sum += value;
    });
    return sum;
}
