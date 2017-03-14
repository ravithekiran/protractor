exports.toWork = function () {

    var mkdirp = require('mkdirp');
    var fs = require('fs');
    var util = require(browser.params.utilities);
    var fs = require('fs-extra');
    //To create a folder screenshots and capture screenshots in it
    fs.emptyDir('Reports/test_reports/html_reports/Screenshots/', function (err) {
        console.log(err);
    });
    //Clearing and deleteing Logs earlier wrote
    util.clearFolder('Reports/Logs/');

    jasmine.getEnv().addReporter({
        specDone: function (result) {
            if (result.status == 'failed') {
                browser.getCapabilities().then(function (caps) {
                    browser.takeScreenshot().then(function (png) {
                        var stream = fs.createWriteStream('Reports/test_reports/html_reports/Screenshots/' + result.description + '.png');
                        stream.write(new Buffer(png, 'base64'));
                        stream.end();
                    });
                });
            }
        }
    });
//Delete all previous reports data
    /* browser.params.aggregateReporting ? console.log("aggregateReporting is ON") : util.deleteFolderRecursive('test_reports/allure-results');
     browser.params.aggregateReporting ? console.log("aggregateReporting is ON") : util.deleteFolderRecursive('target');
     */    // var res = x.replace(/[$#!%\^()\+@_~\'\"*&]/g, "{}");

    //Browser Settings:
    browser.driver.manage().timeouts().implicitlyWait(2000);
    browser.driver.manage().timeouts().setScriptTimeout(60000);
    browser.driver.manage().window().setPosition(0, 0);
    browser.driver.manage().window().maximize();

    //Spec Reporter
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({
        displayStacktrace: true,
        displaySpecDuration: true,
        displayPendingSpec: true,
        prefixes: {success: '\u2713 ', failure: 'x ', pending: '* '}
    }));

    //Using Allure Reporter
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'Reports/test_reports/allure-results'
    }));


    jasmine.getEnv().afterEach(function (done) {
        browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
                return new Buffer(png, 'base64')
            }, 'image/png')();
            done();
        })

    });


    //XML reports
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'Reports/test_reports/xml_reports',
        filePrefix: 'xmloutput',
        modifySuiteName: function(generatedSuiteName, suite) {
            // this will produce distinct suite names for each capability,
            // e.g. 'firefox.login tests' and 'chrome.login tests'
            return generatedSuiteName;
        }
    }));

}