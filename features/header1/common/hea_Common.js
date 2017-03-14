/**
 * Created by Ravikiran on 3/13/2017.
 */
var clientDataObj = require(browser.params.clientSpecificData);
var headerTestDataObj = require(browser.params.clientSpecificTestData + 'headerData.json');
var utls = require(browser.params.utilities);
var userActions = require(browser.params.userActions);
var headerLinksData = headerTestDataObj.header_links_data;

var ft_common = function () {

    function validatingLinks(idx, elts, data, window, logger) {
        var beforeUrl;
        var hrefValue;
        it('Comparing href values of links in header at index ' + idx, function () {
            hrefValue = elts.get(idx).getAttribute('href');
            utls.logEqualPromiseMessages(hrefValue, data[idx].url, logger, 'href values of link in header')
            expect(hrefValue).toEqual(data[idx].url, 'Mismatch of href values of link in header');
            beforeUrl = browser.driver.getCurrentUrl();
        });

        it('Clicking link in header at idx ' + idx, function () {
            userActions.javaScriptClick(elts.get(idx),logger);
        });
        it('Shifting windows and validating them of link at index ' + idx, function () {
            browser.getAllWindowHandles().then(function (winHandlers) {
                userActions.shiftingBrowserWindowTabs(winHandlers, window, beforeUrl,logger);
            });
        });
    }

    this.validateHeaderLinksAndText = function (logger) {
        var headerLinkElts = utls.getStructuredLocators(clientDataObj.header_links,logger);
        var cnt = headerLinksData.length;
        it('comparing TestData and Site header Links Count', function () {
            utls.logEqualPromiseMessages(headerLinkElts.count(), cnt, logger, 'header links count.')
            expect(headerLinkElts.count()).toEqual(cnt, 'Mismatch of header links count.')
        });
        for (var i = 0; i < cnt; i++) {
            validatingHeaderLinkAndText(i,headerLinkElts, logger);
        }
    }

    function validatingHeaderLinkAndText(i,headerLinkElts, logger) {
        var window = clientDataObj.header_links_window;
        var linkText;
        it('Comparing value or text of link in footer at index ' + i, function () {
            linkText = headerLinkElts.get(i).getAttribute('test-data-text');
            utls.logEqualPromiseMessages(linkText, headerLinksData[i].label, logger, 'linkTexts in Header');
            expect(linkText).toEqual(headerLinksData[i].label, 'Mismatch of linkTexts in Header');
        });
        validatingLinks(i, headerLinkElts, headerLinksData, window,logger);
    }

    this.validateSharingIconLinks = function (logger) {
        var sharingFooterLinkElts = utls.getStructuredLocators(clientDataObj.sharing_footer,logger);
        var cnt = sharingFooterLinksData.length;
        var window = clientDataObj.footer_sharing_links_window;

        it('comparing TestData and Site Sharing footer Links Count', function () {
            utls.logEqualPromiseMessages(sharingFooterLinkElts.count(), cnt, logger, 'Sharing footer Links Count')
            expect(sharingFooterLinkElts.count()).toEqual(cnt, 'Mismatch of Sharing footer Links Count')
        });
        for (var i = 0; i < cnt; i++) {
            validatingLinks(i, sharingFooterLinkElts, sharingFooterLinksData, window, 'Social Sharing Links', logger);
        }
    };

}

module.exports = new ft_common();