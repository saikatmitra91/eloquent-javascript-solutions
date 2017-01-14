(function() {
    "use strict";

    function iterator(maxCount, callback) {
        var i = 1,
            j = 1,
            str = '';
        for (i = 1; i <= maxCount; i++) {
            str = '';
            for (j = 1; j <= maxCount; j++) {
                str += callback(i, j);
            }
            print(str);
        }
    }

    function print(value) {
        console.log(value);
    }

    function chess(row, column) {
        var rowState = row % 2;
        var columnState = column % 2;
        var str = (rowState !== columnState) ? '#' : ' ';
        return str;
    }

    iterator(8, chess);
})();
