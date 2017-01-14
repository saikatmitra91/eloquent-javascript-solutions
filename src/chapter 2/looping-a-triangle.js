(function() {
    "use strict";

    function tree() {
        var i = 0,
            iterations = 7,
            str = '',
            append = '#';
        for (i = 0; i < iterations; i++) {
            str += append;
            print(str);
        }
    }

    function print(value) {
        console.log(value);
    }

    tree();
})();
