/**
 * Created by Ravikiran on 2/1/2017.
 */
var defaultEnv = "QA";
var url;
var defaultSite = "apex";
var test_browser;
this.folderName;
var env = (process.argv[2] == undefined) ? defaultEnv : process.argv[2];
var site = (process.argv[3] == undefined) ? defaultSite : process.argv[2];
//Creating Dynamic folder based on Client with timeStampvar date = new Date().toString().split(" ");
const date = new Date().toString().split(" ");
console.log("date:"+date);
// var ex=require('./setUpGlobals.js');
const newPath=('Reports/'+site+'_'+date[1]+date[2]+'_'+date[4].toString()).replace(/[:]/g,"-");
this.folderName=newPath;
var mkdirp = require('mkdirp');
mkdirp.sync(this.folderName);
//Creating Json Folder
mkdirp.sync(this.folderName+'/test_reports/json_reports');
//Creating Logs Folder
mkdirp.sync(this.folderName+'/Logs');
//Making dynamic folder available  in other files
exports.path={

    path1:this.folderName
}
var myReporterObject = require('./my.html.report.js');
var reporter = myReporterObject.needGlobally;

// myReporterObject.HTMLReportsConfig(this.folderName);
// myReporterObject.HTMLReportsConfig()
// var util = require(browser.params.utilities);
// var browser1=browser.params.test_browser;
// console.log(browser.params.test_browser);
// var objects = require('./data/test_data/'+browser.params.site+'/clientSpecificData.json');

/*var returnUrl=function(){
 /!* var objects = require('./data/test_data/apex/clientSpecificData.json');
 *!/
 if(env=='QA'){
 url=objects.qa_url;
 console.log('URL:'+url);
 }
 return url;
 }*/
exports.config = {
    // chromeDriver: 'node_modules/chromedriver/lib/chromedriver/chromedriver.exe',
    /*geckoDriver:'./geckodriver.exe',*/
    // seleniumArgs: ['-Dwebdriver.gecko.driver=./geckodriver.exe'],
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // 'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
    // seleniumServerJar:'./selenium-server-standalone-3.0.1.jar',
    directConnect:true,
    /*(function() {
     if (Browser.params.=='chrome') {
     return true;
     } else {
     return false;
     }
     }()),*/
    plugins: [{
        path: 'aurelia.protractor.js'
    }],
    // specs:'readingJson.js',
    // specs:'spreadsheet.js',

    suites: {
        header: 'features/header/header.suite.js',
        /* header: 'features/header/header.suite.js',
         header: 'features/header/header.suite.js'*/
        // search: 'features/global_search/global_search.suite.js',
        home: 'features/home/home.suite.js'
    },

    noGlobals: false,
    getPageTimeout: 30000,
    allScriptsTimeout: 25000,
    /*multiCapabilities: [{
     'browserName': 'chrome'
     }, {
     'browserName': 'firefox'
     },
     {
     'browserName': 'internet explorer'
     }],*/
    /*'commonCapabilities': {
     'browserstack.user': 'radhakrishna5',
     'browserstack.key': 'crRxfGTTsZLdbTdXHgyG',
     },*/

    /*'multiCapabilities': [{
     'browserName': 'iPad',
     'platform': 'MAC',
     'device': 'iPad Air 2',
     'deviceOrientation':'landscape',
     },{
     'browserName': 'iPhone',
     'platform': 'MAC',
     'device': 'iPhone 6S Plus'
     },{
     'browserName': 'android',
     'platform': 'ANDROID',
     'device': 'Google Nexus 5'
     },{
     'browserName': 'android',
     'platform': 'ANDROID',
     'device': 'Samsung Galaxy S5 Mini'
     }],*/
    /*},*/
    capabilities: {
        /*'browserstack.user': 'radhakrishna5',
         'browserstack.key': 'crRxfGTTsZLdbTdXHgyG',
         'browserName': 'Chrome',
         'platform': 'ANDROID',
         'device': 'Samsung Galaxy S5',
         'deviceOrientation':'landscape',*/

        // 'locationContextEnabled':'true',
        browserName: 'firefox',
        /* version: 'ANY',*/
        IntroduceInstabilityByIgnoringProtectedModeSettings: true,
        ignoreProtectedModeSettings: true,
        // marionette: true,
        chromeOptions: {
            'args': ['--disable-extensions']
        },
        prefs: {
            // 'profile.managed_default_content_settings.geolocation': 1,
            'downloads': {
                'prompt_for_download': false,
                'directory_upgrade': true,
                'default_directory': './downloads/'
            }
        },
        maxInstances: 4,
        shardTestFiles: true
    },

    beforeLaunch: function () {
        /* const date = new Date().toString().split(" ");
         this.folderNameSetUp=('Reports/'+site+'_'+date[1]+date[2]+'_'+date[4].toString()).replace(/[:]/g,"-");
         */
        return myReporterObject.beforeLaunchMethod();
        // util.clearFolder('Logs');
    },

    onPrepare: function () {
        require('./protractor.prepare.js').toWork(reporter);

    },

    afterLaunch: function (exitCode) {
        return myReporterObject.afterLaunchMethod(exitCode);
    },

    params: {
        // clientSpecificData:__dirname +"/data/test_data/"+browser.params.site+"/clientSpecificData.json",
        userData: __dirname + "/data/run_data/user_data.js",
        applicationData: __dirname + "/data/run_data/application_data.js",
        userActions: __dirname + "/utility/user_actions",
        utilities: __dirname + "/utility/utilities",
        logging: false,
        aggregateReporting: true,
        typeAheadLocation:"Location",
        typeAheadCategory:"Category",
        typeAheadKeyword:"KEYWORD",
        typeAheadRecentSearch:"Recent Search"
    },

    resultJsonOutputFile: this.folderName+'/test_reports/json_reports/Testresult.json',
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
 for(var i in exports.config.commonCapabilities)
  caps[i] = caps[i] || exports.config.commonCapabilities[i];
 });
 */

