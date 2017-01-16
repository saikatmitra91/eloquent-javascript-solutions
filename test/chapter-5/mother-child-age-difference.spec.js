describe('mother-child-age-difference', function() {
    var data = require('./../../data/ancestry.js'),
        ageDiffCalculator = require('./../../src/chapter-5/mother-child-age-difference.js');

    it('should be defined', function() {
        expect(data).toBeDefined();
        expect(ageDiffCalculator).toBeDefined();
    });

    it('should be able to calculate avg age difference', function() {
        var avgAgeDiff = ageDiffCalculator(data);
        expect(avgAgeDiff).toEqual(31.2);
    });
});
