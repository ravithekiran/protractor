/**
 * Created by Ravikiran on 3/6/2017.
 */
var clientDataObj = require(browser.params.clientSpecificData);
var footerTestDataObj = require(browser.params.clientSpecificTestData + 'footerData.json');
var utls = require(browser.params.utilities);
var userActions = require(browser.params.userActions);
var footerLinksData = footerTestDataObj.footer_links_data;
var sharingFooterLinksData = footerTestDataObj.social_sharing_data;
var sharingFooterLinkElts = utls.getStructuredLocators(clientDataObj.sharing_footer);

var ft_common = function () {

    function validatingLinks(idx, elts, data, window, msg, logger) {
        var beforeUrl;
        var hrefValue;
        it('Comparing href values of ' + msg + ' in footer at index ' + idx, function () {
            hrefValue = elts.get(idx).getAttribute('href');
            utls.logEqualPromiseMessages(hrefValue, data[idx].url, logger, 'href values of ' + msg)
            expect(hrefValue).toEqual(data[idx].url, 'Mismatch of href values of ' + msg)
            beforeUrl = browser.driver.getCurrentUrl();
        });

        it('Clicking ' + msg + ' in footer at idx ' + idx, function () {
            userActions.clickElement(elts.get(idx),logger);
        });
        it('Shifting windows and validating them of link at index ' + idx, function () {
            browser.getAllWindowHandles().then(function (winHandlers) {
                userActions.shiftingBrowserWindowTabs(winHandlers, window, beforeUrl,logger);
            });
        });
    }

    this.validateFooterLinksAndText = function (logger) {
        var footerLinkElts = utls.getStructuredLocators(clientDataObj.footer_links,logger);
        var cnt = footerLinksData.length;
        it('comparing TestData and Site footer Links Count', function () {
            utls.logEqualPromiseMessages(footerLinkElts.count(), cnt, logger, 'footer links count.')
            expect(footerLinkElts.count()).toEqual(cnt, 'Mismatch of footer links count.')
        });
        for (var i = 0; i < cnt; i++) {
            validatingFooterLinkAndText(i,footerLinkElts, logger);
        }
    }

    function validatingFooterLinkAndText(i,footerLinkElts, logger) {
        var window = clientDataObj.footer_links_window;
        var linkText;
        it('Comparing value or text of link in footer at index ' + i, function () {
            linkText = footerLinkElts.get(i).getText();
            utls.logEqualPromiseMessages(linkText, footerLinksData[i].label, logger, 'linkTexts in footer');
            expect(linkText).toEqual(footerLinksData[i].label, 'Mismatch of linkTexts in footer');
        });
        validatingLinks(i, footerLinkElts, footerLinksData, window, 'links',logger);
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