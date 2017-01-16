module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: ['src/**/*.js', 'test/**/*.js', 'data/**/*.js'],
            options: {
                globals: {
                    _: false,
                    $: false,
                    describe: false,
                    it: false,
                    expect: false,
                    beforeEach: false,
                    afterEach: false,
                    sinon: false,
                    jasmine: false,
                    strict: true
                },
                browser: true,
                devel: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
};
