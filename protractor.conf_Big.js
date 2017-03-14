exports.config = {
  // chromeDriver: './selenium/chromedriver'
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  suites: {
    login: 'features/login/login.suite.js',//protractor protractor.conf.js --suite login
    tenants: 'features/multiTenant/multi.tenant.suite.js'//protractor protractor.conf.js --suite tenants
  },
  // specs: ['features/login/login.suite.js','features/multiTenant/multi.tenant.suite.js'],
  noGlobals: false,
  getPageTimeout: 30000,//Protractor waits for the page to be loaded and angular variable to be present
  allScriptsTimeout: 25000,//page is synchronized asynchronous script to finish execution
  capabilities: {
    browserName: 'chrome',
    maxInstances: 3,
    logName: 'Chrome - English', // User defined name for the capability that will display in the results log
    shardTestFiles: true
  },
  // beforeLaunch: function() {
  //    console.log("############# beforeLaunch Blocked called #############");
  //    // At this point, global variable 'protractor' object will NOT be set up,
  //    // and globals from the test framework will NOT be available. The main
  //    // purpose of this function should be to bring up test dependencies.
  //  },

  onPrepare: function () {
    console.log("############# onPrepare Blocked called #############");
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'all' }));
  },

  //  onComplete: function() {
  //  console.log("############# onComplete Blocked called #############");
  //    // At this point, tests will be done but global objects will still be
  //    // available.
  //  },

  // onCleanUp: function(exitCode) {
  // console.log("############# onCleanUp Blocked called #############");
  // },
  //
  //afterLaunch: function(exitCode) {
  //console.log("############# afterLaunch Blocked called #############");
  //},

  params: {
    lang: {
      name: 'Jane',
      filepath: "FilePathTo ADD"
    }
  },

  resultJsonOutputFile: "JsonOutputFile.json",
  restartBrowserBetweenTests: false,

  framework: 'jasmine2',
  jasmineNodeOpts: {
    // If true, print colors to the terminal.
    showColors: true,
    //'it' block takes longer than the Jasmine timeout for any reason
    defaultTimeoutInterval: 90000,
    print: function () { }
  },
};