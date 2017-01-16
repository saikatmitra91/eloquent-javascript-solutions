function every(arr, callback) {
    var result = true;
    var i = 0;
    for (i = 0; i < arr.length; i++) {
        result = callback(arr[i]);
        if (!result) {
            break;
        }
    }
    return result;
}

function some(arr, callback) {
    var result = false;
    var i = 0;
    for (i = 0; i < arr.length; i++) {
        result = callback(arr[i]);
        if (result) {
            break;
        }
    }
    return result;
}


module.exports = {
    'every': every,
    'some': some
};
