(function() {
    "use strict";

    function Blob(value, rest) {
        this.value = value;
        this.rest = rest;
    }

    function arrayToList(arr) {
        var list = null,
            i = 0;
        for (i = arr.length - 1; i >= 0; i--) {
            list = prepend(arr[i], list);
        }
        return list;
    }

    function listToArray(list) {
        var arr = [];
        while (list && list.value) {
            arr.push(list.value);
            list = list.rest;
        }
        return arr;
    }

    function prepend(value, list) {
        var elem = new Blob(value, list);
        list = elem;
        return list;
    }

    function nth(pos, list) {
        var counter = 0;
        while (counter !== pos) {
            if (!list) {
                break;
            }
            list = list.rest;
            counter++;
        }
        return list ? list.value : undefined;
    }

    function init() {
        var arr = [1, 2];
        var list = arrayToList(arr);
        console.log('original array ::', arr);
        console.log('array to list ::', list);
        console.log('list to array ::', listToArray(list));
        list = prepend(0, list);
        console.log('prepend to list::', list);
        console.log('value at 2nd position', nth(2, list));
    }

    init();
})();
