var userData = require(browser.params.userData);

describe('login success test', function () {
    xit('dragdrop', function () {
        browser.get('http://codef0rmer.github.io/angular-dragdrop');
        browser.sleep(2000);
        var drag = $('.ui-draggable[data-drag="true"]');
        var drop = $('.ui-droppable[data-drop="true"]');

        expect(drag.isDisplayed()).toBe(drop.isDisplayed());

        browser.sleep(2000);
        browser.actions().dragAndDrop(drag, drop).perform();
    });
    xit('highlight', function () {
        browser.get('http://www.protractortest.org/#/');
        var ref = $$('.navbar-nav li.dropdown').last();
        userActions.Click(ref);
        var apiLink = $$('.navbar-nav li.dropdown .dropdown-menu').last().$$('li').get(1);
        userActions.Click(apiLink);
        var search = $('#searchInput');
        userActions.waitAndClick(search, 3000);
        userActions.TypeText(search, 'element');

        var search1 = $('#searchInput1');
        // userActions.waitAndClick(search1,8000);
        // userActions.Click(search1);
        userActions.TypeText(search1, 'element111');
    });
    it('print', function () {
        console.log(browser.params.userData);
        console.log(userData.appUrl);
    });
});