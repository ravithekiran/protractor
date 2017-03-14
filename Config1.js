/**
 * Created by Ravikiran on 2/1/2017.
 */
// usage: protractor config.js --params.specs="*" --params.browser=ie --params.threads=1
//        protractor config.js --params.specs="dir1|dir2"
//        protractor config.js --params.specs="dir1|dir2/spec1.js|dir2/spec2.js"
    //        protractor config.js --params.site="apex" --params.env="QA"
// process command line arguments and initialize run configuration file

var reportfolder='apex';
var init = function(config) {
    const path = require('path');
    var specs;
    for (var i = 3; i < process.argv.length; i++) {
        var match = process.argv[i].match(/^--params\.([^=]+)=(.*)$/);
        if (match)
            switch (match[1]) {
                case 'specs':
                    specs = match[2];
                    break;
                case 'browser':
                    config.capabilities.browserName = match[2];
                    if (match[2].toLowerCase() === 'ie') {
                        config.capabilities.browserName = 'internet explorer';
                        config.capabilities.platform = 'ANY';
                        config.capabilities.version = '11';
                        config.seleniumArgs = ['-Dwebdriver.ie.driver=' + path.join('node_modules', 'protractor' ,'selenium' ,'IEDriverServer.exe')];
                    }
                    if (match[2] !== 'chrome' && match[2] !== 'firefox')
                        config.directConnect = false;
                    break;
                case 'timeout':
                    config.jasmineNodeOpts.defaultTimeoutInterval = parseInt(match[2]);
                    break;
                case 'threads':
                    config.capabilities.maxInstances = parseInt(match[2]);
                    config.capabilities.shardTestFiles = config.capabilities.maxInstances > 1;
                    break;
                case 'site':
                    if(match[2]==''||match[2]==undefined){
                        config.site= 'apex';
                        reportfolder='apex';
                        config.params.clientSpecificData= __dirname+"/data/test_data/apex/clientSpecificData.json"
                        config.params.clientSpecificTestData=__dirname+"/data/apex/testdata/"
                    }else{
                        config.site= match[2].toLowerCase();
                        reportfolder=match[2].toLowerCase();
                        config.params.clientSpecificData= __dirname+"/data/test_data/"+config.site+"/clientSpecificData.json"
                        config.params.clientSpecificTestData=__dirname+"/data/"+config.site+"/testdata/";
                    }

                    break;
                case 'env':
                    if(match[2]==''||match[2]==undefined){
                        config.env="qa";
                        config.params.environmentUrl='qa_url';
                    }else{
                        config.env=match[2].toLowerCase();
                        if(match[2].toLowerCase()=='stage'){
                            config.params.environmentUrl='stage_url';
                        }else if(match[2].toLowerCase()=='prod'){
                            config.params.environmentUrl='prod_url';
                        }
                    }
                    break;

            }
    }

    // generate specs array
    /*specs.split(/\|/g).forEach(function(dir) {
     if (dir.endsWith('.js'))
     config.specs.push(dir);
     else
     config.specs.push(path.join(dir, '*.js'));
     });
     */
    return config;
};

exports.config = (function() {

    return init({
        beforeLaunch: function () {
        },
        onPrepare: function () {
            require('./protractor.prepare.js').toWork();
        },
        site:'apex',
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
            var newPath='./ClientSpecificReports/'+reportfolder+'_'+date[1]+date[2]+'_'+date[4].toString().replace(/[:]/g,"-");
            copydir.sync('./Reports', './'+newPath);

        },
        plugins: [{
            path: 'aurelia.protractor.js'

        }],
        noGlobals: false,
        getPageTimeout: 30000,
        allScriptsTimeout: 25000,
        prefs: {
            'downloads': {
                'prompt_for_download': false,
                'directory_upgrade': true,
                'default_directory': './downloads/'
            }
        },
        specs: ['features/header1/HEA-001/HEA-001.js'],
        // specs:['features/TA/TA-005/TA-005.js'],
        // specs: ['features/TA/TA-006/TA-006.js','features/TA/TA-005/TA-005.js'],
        env:"qa",
        capabilities: {
            browserName: 'chrome',
            shardTestFiles: true,
            maxInstances: 2
        },
        directConnect: true,
        resultJsonOutputFile: './Reports/test_reports/json_reports/Testresult.json',
        restartBrowserBetweenTests: false,
        framework: 'jasmine2',
        jasmineNodeOpts: {
            showColors: true,
            defaultTimeoutInterval: 90000,
            print: function () {
            }
        },
        suites: {
            header: 'features/header/header.suite.js',
            // home: 'features/home/home.suite.js'__dirname+"/data/test_data/"+config.site+"/clientSpecificData.json"
        },
        params: {
            clientSpecificData: __dirname +"/data/apex/elements/clientSpecificData.json",
            environmentUrl:'qa_url',
            clientSpecificTestData:__dirname+"/data/apex/testdata/",
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
        }
    });
})();