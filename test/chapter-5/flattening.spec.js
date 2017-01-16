describe('flattening.js', function() {
    "use strict";
    var flattening = require('./../../src/chapter-5/flattening.js');

    it('should be defined', function() {
        expect(flattening).toBeDefined(jasmine.any(Function));
    });

    it('should be able to flatten array of arrays', function() {
        var arr = [0, [1, [2, [3, [4, [5, 6, 7]]]]]];
        var flattened = flattening(arr);
        expect(flattened).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    });
});
