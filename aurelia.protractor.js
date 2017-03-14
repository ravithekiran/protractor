/* Aurelia Protractor Plugin */
/* eslint-disable no-var, no-console */
function addValueBindLocator() {
    by.addLocator('valueBind', function (bindingModel, optParentElement) {
        var using = optParentElement || document;
        var matches = using.querySelectorAll('*[value\\.bind="' + bindingModel + '"]');
        var result;

        if (matches.length === 0) {
            result = null;
        } else if (matches.length === 1) {
            result = matches[0];
        } else {
            result = matches;
        }

        return result;
    });
}

function addSrcBindLocator() {
    by.addLocator('srcBind', function (bindingModel, optParentElement) {
        var using = optParentElement || document;
        var matches = using.querySelectorAll('*[src\\.bind="' + bindingModel + '"]');
        var result;

        if (matches.length === 0) {
            result = null;
        } else if (matches.length === 1) {
            result = matches[0];
        } else {
            result = matches;
        }

        return result;
    });
}

function addShowBindLocator() {
    by.addLocator('showBind', function (bindingModel, optParentElement) {
        var using = optParentElement || document;
        var matches = using.querySelectorAll('*[show\\.bind="' + bindingModel + '"]');
        var result;

        if (matches.length === 0) {
            result = null;
        } else if (matches.length === 1) {
            result = matches[0];
        } else {
            result = matches;
        }

        return result;
    });
}

function addOptionBindLocator() {
    by.addLocator('optionBind', function (bindingModel, optParentElement) {
        var using = optParentElement || document;
        var matches = using.querySelectorAll('option[value\\.bind="' + bindingModel + '"]');
        var result;

        if (matches.length === 0) {
            result = null;
        } else if (matches.length === 1) {
            result = matches[0];
        } else {
            result = matches;
        }

        return result;
    });
}

function addClickTriggerLocator() {
    by.addLocator('clickTrigger', function (bindingModel, optParentElement) {
        var using = optParentElement || document;
        var matches = using.querySelectorAll('*[click\\.trigger="' + bindingModel + '"]');
        var result;

        if (matches.length === 0) {
            result = null;
        } else if (matches.length === 1) {
            result = matches[0];
        } else {
            result = matches;
        }

        return result;
    });
}

function addHrefLocator() {
    by.addLocator('href', function (bindingModel, optParentElement) {
        var using = optParentElement || document;
        var matches = using.querySelectorAll('*[href="' + bindingModel + '"]');
        var result;

        if (matches.length === 0) {
            result = null;
        } else if (matches.length === 1) {
            result = matches[0];
        } else {
            result = matches;
        }

        return result;
    });
}

function loadAndWaitForAureliaPage(pageUrl) {
    browser.get(pageUrl);
    return browser.executeAsyncScript(
        'var cb = arguments[arguments.length - 1];' +
        'document.addEventListener("aurelia-composed", function (e) {' +
        'Â  cb("Aurelia App composed")' +
        '}, false);'
    ).then(function (result) {
        return result;
    });
}

function waitForRouterComplete() {
    return browser.executeAsyncScript(
        'var cb = arguments[arguments.length - 1];' +
        'document.querySelector("[aurelia-app]")' +
        '.aurelia.subscribeOnce("router:navigation:complete", function() {' +
        'Â  cb(true)' +
        '});'
    ).then(function (result) {
        return result;
    });
}

/* Plugin hooks */
exports.setup = function (config) {
    // Ignore the default Angular synchronization helpers
    browser.ignoreSynchronization = true;

    // custom locators
    addValueBindLocator();
    addSrcBindLocator();
    addShowBindLocator();
    addOptionBindLocator();
    addHrefLocator();
    addClickTriggerLocator();

    // attach a new way to browser.get a page and wait for Aurelia to complete loading
    browser.loadAndWaitForAureliaPage = loadAndWaitForAureliaPage;

    // wait for router navigations to complete
    browser.waitForRouterComplete = waitForRouterComplete;
};

exports.teardown = function (config) {
};
exports.postResults = function (config) {
};