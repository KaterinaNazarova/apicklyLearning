var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'tests/reports',
  filename: 'last-report.html',
  ignoreSkippedSpecs: true,
  captureOnlyFailedSpecs: true
});

exports.config = {
//**********************************************
// Jasmine's configs
 capabilities: {
  'browserName': 'chrome'
},
 // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
 framework: 'jasmine',
 specs: ['tests/GetToken.js'],
 jasmineNodeOpts: {
   defaultTimeoutInterval: 30000
 },

 // *******************************************
 // Configs for Protractor screenshot reporter
 // Setup the report before any tests start
 beforeLaunch: function() {
   return new Promise(function(resolve){
     reporter.beforeLaunch(resolve);
   });
 },

 // Assign the test reporter to each running instance
 onPrepare: function() {
   jasmine.getEnv().addReporter(reporter);
 },

 // Close the report after all tests finish
 afterLaunch: function(exitCode) {
   return new Promise(function(resolve){
     reporter.afterLaunch(resolve.bind(this, exitCode));
   });
 }
};