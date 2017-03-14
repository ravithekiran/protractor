var userActions = require(browser.params.userActions);
var utils=require(browser.params.utilities);
exports.toWork = function (linkElement, pageUrl, isInSameWindow) {
    describe('testing a link ', function () {
        it('clicking link and verify page url ', function () {
            browser.sleep(2000);
            userActions.Click(linkElement);
            browser.sleep(2000);
            if (isInSameWindow)
                expect(browser.getCurrentUrl()).toEqual(pageUrl);
            else {
                userActions.switchToWindowByIndex(1);
                expect(browser.getCurrentUrl()).toEqual(pageUrl+"1");
                userActions.closeWindowByIndex(1);
                userActions.switchToWindowByIndex(0);
            }
        });
    });
};