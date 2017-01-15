(function() {
    "use strict";

    function reverseArray(arr) {
        var reversArr = [],
            maxIndex = arr.length - 1,
            i = 0;
        for (i = 0; i <= maxIndex; i++) {
            reversArr[maxIndex - i] = arr[i];
        }
        return reversArr;
    }

    function reverseArrayInPlace(arr) {
        var maxCounter = arr.length % 2 === 0 ? ((arr.length) / 2 - 1) : ((arr.length - 1) / 2 - 1);
        var i = 0;
        var maxIndex = arr.length - 1;
        var swapNum;
        for (i = 0; i <= maxCounter; i++) {
            swapNum = arr[i];
            arr[i] = arr[maxIndex - i];
            arr[maxIndex - i] = swapNum;
        }
        return arr;
    }

    function init() {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        var date;
        console.log('Original array ::', arr);
        date = new Date().getTime();
        console.log('Reversed array ::', reverseArray(arr));
        console.log('reverseArray function took ::', new Date().getTime() - date, 'ms');
        console.log('Original array ::', arr);
        date = new Date().getTime();
        console.log('Reversed array ::', reverseArrayInPlace(arr));
        console.log('reverseArrayInPlace function took ::', new Date().getTime() - date, 'ms');
        console.log('original array ::', arr);
    }

    init();
})();
