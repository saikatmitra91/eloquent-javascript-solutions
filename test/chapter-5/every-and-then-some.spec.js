describe('every-and-then-some', function() {
    "use strict";
    var every = require('./../../src/chapter-5/every-and-then-some.js').every;
    var some = require('./../../src/chapter-5/every-and-then-some.js').some;
    var evenValidator, allEvenArr, someEvenArr, noEvenArr;

    beforeEach(function() {
        allEvenArr = [2, 8, 10];
        someEvenArr = [2, 8, 9];
        noEvenArr = [1, 7, 9];
        evenValidator = function(value) {
            return value % 2 === 0;
        };
    });


    it('some and every should be defined', function() {
        expect(every).toEqual(jasmine.any(Function));
        expect(some).toEqual(jasmine.any(Function));
    });

    it('every should work', function() {
        expect(every(allEvenArr, evenValidator)).toEqual(true);
        expect(every(noEvenArr, evenValidator)).toEqual(false);
        expect(every(someEvenArr, evenValidator)).toEqual(false);
    });


    it('some should work', function() {
        expect(some(allEvenArr, evenValidator)).toEqual(true);
        expect(some(noEvenArr, evenValidator)).toEqual(false);
        expect(some(someEvenArr, evenValidator)).toEqual(true);
    });
});
