/**
 * Created by Ravikiran on 2/10/2017.
 */
var clientData = require(browser.params.clientSpecificData);
var userActions = require(browser.params.userActions);
var utls = require(browser.params.utilities);
var common = function () {
    this.loadHomePage = function (logger) {
        it('Loading Home Page ', function () {
            logger.info('Loading Page:'+clientData[browser.params.environmentUrl])
            browser.driver.get(clientData[browser.params.environmentUrl]);
        });

        it('Validate Correct page Loaded', function () {
            utls.logEqualPromiseMessages(browser.driver.getCurrentUrl(),clientData[browser.params.environmentUrl],logger,'page URLs')
            expect(browser.driver.getCurrentUrl()).toBe(clientData[browser.params.environmentUrl]);
        });
    }

    this.loadCategoryPage = function () {
        it('Loading category page', function () {

        });
    }

    this.loadJdPage = function () {
        it('Loading Job Description Page', function () {

        });
    }
}
module.exports = new common();




