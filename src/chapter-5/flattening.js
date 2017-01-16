function flattening(arr) {
    var reducedArr = arr.reduce(function(current, value) {
        if (Array.isArray(value)) {
            return current.concat(flattening(value));
        } else {
            return current.concat(value);
        }
    }, []);
    return reducedArr;
}

module.exports = flattening;
