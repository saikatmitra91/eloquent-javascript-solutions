(function() {
    "use strict";

    function iteration() {
        var i = 1;
        for (i = 1; i <= 100; i++) {
            print(validate(i));
        }
    }

    function validate(value) {
        var str = "";
        if (value % 3 === 0) {
            str += 'Fizz';
        }

        if (value % 5 === 0) {
            str += 'Buzz';
        }
        return str || value;
    }

    function print(value) {
        console.log(value);
    }

    iteration();
})();
