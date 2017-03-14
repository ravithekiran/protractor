var HTMLReportsConfig = function () {
  var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
  var reporter = new HtmlScreenshotReporter({
    dest: 'Reports/test_reports/html_reports',
    filename: 'MyReports.html',
    userCss: '../../my-styles.css',
    //ignoreSkippedSpecs: true
      showSummary: true,
    showQuickLinks: true,
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: true,
    reportTitle: "Protractor E2E Tests Results",
    showConfiguration: true,
      configurationStrings: {
      "language": "param1",
      "My 2nd Param": "test"
    },
   /* pathBuilder: function (currentSpec, suites, browserCapabilities) {
      // will return chrome/your-spec-name.png
      var filename = currentSpec.fullName.toString().replace(/ /g, '');
      return browserCapabilities.get('browserName') + '-' + filename;
        // return 'Screenshots' + '/' + filename;
    }*/
  });

  this.needGlobally = reporter;

  this.beforeLaunchMethod = function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  };

  this.afterLaunchMethod = function (exitCode,site) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
        var copydir = require('copy-dir');
        var date = new Date().toString().split(" ");
        var newPath='./ClientSpecificReports/'+site+'_'+date[1]+date[2]+'_'+date[4].toString().replace(/[:]/g,"-");
        copydir.sync('./Reports', './'+newPath);
    });

  }
}
module.exports = new HTMLReportsConfig();
