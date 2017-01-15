(function() {
    function deepEqual(obj1, obj2) {
        var isEqual = false;
        if (typeof obj1 === 'object' && typeof obj2 === 'object' && obj1 !== null && obj2 !== null) {
            for (key in obj1) {
                if (typeof obj1[key] === 'object') {
                    isEqual = deepEqual(obj1[key], obj2[key]);
                } else {
                    isEqual = (obj1[key] === obj2[key]);
                }
                if (!isEqual) {
                    break;
                }
            }
        } else {
            isEqual = (obj1 === obj2);
        }
        return isEqual;
    }

    function init() {
        console.log(deepEqual({
            "1": 1,
            "2": {
                "a": "a",
                "b": "b"
            }
        }, {
            "1": 1,
            "2": {
                "a": "a",
                "b": "b"
            }
        }));
    }

    init();
})();
