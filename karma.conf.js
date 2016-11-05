module.exports = function(karma) {
    karma.set({
        browsers: ['Chrome'],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/js/*.js',
            'app/js/controllers/*.js',
            'app/js/factories/*.js',
            'test/*.spec.js' // the asterisks tell karma to look in ALL subdirectories as well
        ],
        'plugins': [
            'karma-mocha',
            'karma-chai',
            'karma-chrome-launcher',
        ],
        frameworks: ['mocha', 'chai'],
        singleRun: false
    });
};
