describe('historical-life-expectancy', function() {
    var data = require('./../../data/ancestry.js');
    var lifeExpectancy = require('./../../src/chapter-5/historical-life-expectancy.js');

    it('should be defined', function() {
        expect(data).toBeDefined();
        expect(lifeExpectancy).toEqual(jasmine.any(Function));
    });

    it('should calculate lifeExpectancy', function() {
        var lifeExpData = lifeExpectancy(data);
        expect(lifeExpData).toEqual(jasmine.any(Object));
    });
});
