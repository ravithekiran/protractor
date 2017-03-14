var myReporterObject = require('./my.html.report.js');
var reporter = myReporterObject.needGlobally;
var defaultEnv = "QA";
var url;
var defaultSite = "apex";
var test_browser;
// const folderName;
var env = (process.argv[2] == undefined) ? defaultEnv : process.argv[2];
var site = (process.argv[3] == undefined) ? defaultSite : process.argv[2];

exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar:'./drivers/selenium-server-standalone-3.0.1.jar',
    beforeLaunch: function () {
   },
    onPrepare: function () {
        require('./protractor.prepare.js').toWork();
    },

//HTMLReport called once tests are finished
    onComplete: function() {
        var browserName, browserVersion,devicePlatform;
        var capsPromise = browser.getCapabilities();
        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            devicePlatform = caps.get('platform');
            var HTMLReport = require('./utility/protractor-html-reporter');
            testConfig = {
                reportTitle: 'Test Execution Report',
                outputPath: 'Reports/test_reports/html_reports',
                // filename:'AdvancedReports.html',
                screenshotPath: './Screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                platform:devicePlatform,
                modifiedSuiteName:true,
                screenshotsOnlyOnFailure: true
            };
            new HTMLReport().from('Reports/test_reports/xml_reports/xmloutput.xml', testConfig);
        });
    },
    afterLaunch: function (exitCode) {
        var copydir = require('copy-dir');
        var date = new Date().toString().split(" ");
        var newPath='./ClientSpecificReports/'+site+'_'+date[1]+date[2]+'_'+date[4].toString().replace(/[:]/g,"-");
        copydir.sync('./Reports', './'+newPath);

    },
    directConnect:true,

    plugins: [{
        path: 'aurelia.protractor.js'

    }],

    specs:['./elements.js'],
    suites: {
        header: 'features/header/header.suite.js',

        // home: 'features/home/home.suite.js'
    },

    noGlobals: false,
    getPageTimeout: 30000,
    allScriptsTimeout: 25000,

    capabilities: {
        browserName: 'chrome',
        IntroduceInstabilityByIgnoringProtectedModeSettings: true,
        ignoreProtectedModeSettings: true,

       /* chromeOptions: {
            'args': ['--disable-extensions']
        },*/
        prefs: {

            'downloads': {
                'prompt_for_download': false,
                'directory_upgrade': true,
                'default_directory': './downloads/'
            }
        },
        maxInstances: 4,
        shardTestFiles: true
    },



    params: {
        userData: __dirname + "/data/run_data/user_data.js",
        applicationData: __dirname + "/data/run_data/application_data.js",
        userActions: __dirname + "/utility/user_actions",
        utilities: __dirname + "/utility/utilities",
        logging: false,
        aggregateReporting: true,
        typeAheadLocation:"Location",
        typeAheadCategory:"Category",
        typeAheadKeyword:"KEYWORD",
        typeAheadRecentSearch:"Recent Search",
        sameBrowserWindow:"same",
        newBrowserWindow:"new"
    },

    resultJsonOutputFile: './Reports/test_reports/json_reports/Testresult.json',
    restartBrowserBetweenTests: false,
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000,
        print: function () {
        }
    }
};

/*
exports.config.multiCapabilities.forEach(function(caps){
    for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
*/
// module.exports=new dynamicfolderfunction();