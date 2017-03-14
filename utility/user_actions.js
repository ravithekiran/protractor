var utls = browser.params.utilities;


var userActions = function () {

    this.clickElement = function (elementToClickOn,logger) {
               elementToClickOn.click().then(function () {
               logger.info('Clicked on the WebElement:'+elementToClickOn.locator());
            }).catch(function(excp){
                logger.error('Failed to click on the WebElement and the exception is:'+excp);
                throw 'Failed to click on the WebElement and the exception is:'+excp;
            });
     };

    this.javaScriptClick = function (elementToClickOn, logger) {
        browser.executeScript('arguments[0].click()', elementToClickOn).then(function () {
            logger.info('Clicked on the WebElement')
        }).catch(function (excp) {
            logger.error('Failed to javascript click on the WebElement and the exception is:' + excp);
            throw 'Failed to javascript click on the WebElement and the exception is:' + excp;
        });
    };

    this.mouseMoveAndClick = function (elementToClickOn,logger) {
            utls.mouseToElement(elementToClickOn).then(function () {
                logger.info('mouse moved on to element ' + elementToClickOn.locator());
            }).catch(function(excp){
                logger.error('Failed to move mouse, on to element ' + elementToClickOn.locator() + ' and the error was ' + excp);
                throw 'Failed to move mouse, on to element ' + elementToClickOn.locator() + ' and the error was ' + excp;
            });
            elementToClickOn.click().then(function () {
                logger.info('clicked on the element' + elementToClickOn.locator());
            }).catch(function(excp){
                logger.error('Failed to clicked on the element ' + elementToClickOn.locator() + ' and the error was ' + excp);
                throw 'Failed to clicked on the element ' + elementToClickOn.locator() + ' and the error was ' + excp;
            });
    };

    this.typeText = function (elementToTypeIn, textToType,logger) {
            elementToTypeIn.sendKeys(textToType).then(function () {
                logger.info('entered text ' + textToType + ' in element' + elementToTypeIn.locator());
            }).catch(function(excp){
                logger.error('Failed to enter text ' + textToType + ' in element' + elementToTypeIn.locator() + ' and the error was ' + excp);
                throw 'Failed to enter text ' + textToType + ' in element' + elementToTypeIn.locator() + ' and the error was ' + excp;
            });
        };

    this.clearAndType = function (elementToTypeIn, textToType,logger) {
            elementToTypeIn.clear();
            elementToTypeIn.sendKeys(textToType).then(function () {
                logger.info('cleared and entered text "' + textToType + '" in element ' + elementToTypeIn.locator());
            }).catch(function(excp){
                logger.error('Failed to enter text "' + textToType + '" in element' + elementToTypeIn.locator() + ' and the error was ' + excp);
                throw 'Failed to enter text ' + textToType + ' in element' + elementToTypeIn.locator() + ' and the error was ' + excp;
            });
        };

    this.clearSearchBox = function (elementToClear,logger) {
            elementToClear.clear().then(function () {
                logger.info('Cleared textBox with locator :' + elementToClear.locator());
            }).catch(function(excp){
                logger.error('Failed to clear textbox with locator :' + elementToClear.locator() + ' and the error was ' + excp)
                throw 'Failed to clear textbox with locator :' + elementToClear.locator() + ' and the error was ' + excp;
            });
        };

    this.switchToWindowByIndex = function (n) {
        browser.getAllWindowHandles().then(function (handles) {
            expect(handles.length).toBeGreaterThan(n);
            browser.switchTo().window(handles[n]);
            // consoleLog('Focus switched to ' + (n + 1) + 'numbered window');
        });
    };

    this.shiftingBrowserWindowTabs = function (winHandles, window, beforeUrlProm,logger) {
           if (window === browser.params.sameBrowserWindow) {
            expect(winHandles.length).toEqual(1, 'Link should open in a same window but it opened in new window')
            if (winHandles.length === 1) {
                logger.info('As Expected, Link Opened in same window ')
                clickBrowserBackByUrl(beforeUrlProm,logger)
            } else {
                logger.error('Link should open in same window but it got opened in different window')
                this.closeWindowTwoSwitchToWindowOneByIndex(1);
            }
        } else if (window === browser.params.newBrowserWindow) {
            expect(winHandles.length).toEqual(2, 'Link should open in a new window but it opened in same window')
            if (winHandles.length === 2) {
                logger.info('As Expected, Link Opened in other/new window')
                this.closeWindowTwoSwitchToWindowOneByIndex(1);
            } else {
                logger.error('Link should open in different window but it got opened in same window')
                clickBrowserBackByUrl(beforeUrlProm,logger)
            }
        }
    }

    this.closeWindowByIndex = function (n) {
        this.switchToWindowByIndex(n);
        browser.driver.close();
        // consoleLog('Closed ' + (n + 1) + 'numbered window');
    };

    this.closeWindowTwoSwitchToWindowOneByIndex = function (n) {
        this.closeWindowByIndex(n);
        this.switchToWindowByIndex(n - 1);
        browser.sleep(1000)
    }
    this.scrollToBottom = function (logger) {
        browser.executeScript("window.scrollTo(0, document.body.scrollHeight)");
        logger.info('Scrolled to bottom of the Page')
    }

    function clickBrowserBackButton() {
        browser.navigate().back();
        browser.sleep(1000)
    }

    function clickBrowserBackByUrl(beforeUrlProm,logger) {
        beforeUrlProm.then(function (url1) {
            browser.driver.getCurrentUrl().then(function (url2) {
                if (url1 !== url2) {
                    logger.info('Clicked Browser back button');
                    clickBrowserBackButton()
                }else{
                    logger.info('As Before['+url1+'] and After['+ url2+']Urls are same, So did not clicked on browser back button');
                }
            })
        }).catch(function (excp) {
            logger.error('Error occurred while clicking browser back by comparing before and after Urls:' + excp);
            throw 'Error occurred while clicking browser back by comparing before and after Urls:' + excp;
        })
    }

    this.hitEnterKeyWithElement = function (element,logger) {
        element.clear();
        element.sendKeys(protractor.Key.ENTER).then(function () {
            logger.info('clicked ENTER key  in element ' + element.locator());
        }).catch(function (excp) {
            logger.error('Failed to click ENTER key in element' + element.locator() + ' and the error was ' + excp)
            throw 'Failed to click ENTER key in element' + element.locator() + ' and the error was ' + excp;
        });
    }

    this.selectDropDownByIndex = function (elementToSelect, idx) {
                if (idx !== undefined) {
                var options = element.all(by.tagName('option'))
                    .then(function (options) {
                        if (idx <= options.length) {
                            options[idx].click();
                            logger.info('clicked on drop down element ' + elementToSelect.locator() + ' at specified index:' + idx);
                        } else {
                            logger.error('Specified index: ' + idx + ' value is greater than the number of options[' + options.length + '] available in the select tag for locator ' + elementToSelect.locator());
                            throw 'Specified index: ' + idx + ' value is greater than the number of options[' + options.length + '] available in the select tag for locator ' + elementToSelect.locator();
                        }
                    }).catch(function (excp) {
                        logger.error('Failed to click drop down element ' + elementToSelect.locator() + ' and the error was ' + excp)
                        throw 'Failed to click drop down element ' + elementToSelect.locator() + ' and the error was ' + excp;
                    });
            } else {
                    logger.error('Given drop down element ' + elementToSelect.locator() + ' is not provided with index to select')
                    throw 'Given drop down element ' + elementToSelect.locator() + ' is not provided with index to select';
            }
    }

    function highlightGivenElementInGivenColor(webElement, color) {
        return browser.executeScript("arguments[0].style.border='3px solid " + color + "'", webElement);
    }

    /*this.getElementText = function (elementToGetText) {
     var data;
     elementToGetText.isDisplayed().then(function () {
     highlight(elementToGetText);
     elementToGetText.getText().then(function (val) {
     consoleLog('Got text \'' + val + '\' in element' + elementToGetText.locator());
     data=val;
     return data;
     }, function (error) {
     throw 'Failed to get text from element' + elementToGetText.locator() + ' and the error was ' + error;
     });
     }, function (error) {
     throw 'Given element ' + elementToGetText.locator() + 'not displayed and the error was ' + error;
     });
     };*/
    
    /* elementToSelect.isDisplayed().then(function () {
     var drpDwn = new Select(elementToSelect);
     drpDwn.selectByIndex(1);
     /!* elementToSelect.click().then(function () {
     consoleLog('clicked on element ' + elementToSelect.locator());
     }, function (error) {
     throw 'Failed to clicked on element ' + elementToSelect.locator() + ' and the error was ' + error;
     });
     }, function (error) {
     throw 'Given element ' + elementToSelect.locator() + ' not displayed and the error was ' + error;*!/
     });
     }*/

    /*this.consoleLog=function(message) {
     if (isLoggingOn)
     console.log('       -> ' + message);
     };*/

    /* this.waitAndClick = function (elementToClickOn, timeOut) {
     utls.waitForElementDisplay(elementToClickOn, timeOut).then(function () {
     highlight(elementToClickOn);
     elementToClickOn.click().then(function () {
     consoleLog('clicked on element ' + elementToClickOn.locator());
     }, function (error) {
     throw 'Failed to clicked on element ' + elementToClickOn.locator() + ' and the error was ' + error;
     });
     }, function (error) {
     throw 'Given element ' + elementToClickOn.locator() + ' not displayed and the error was ' + error;
     }).catch(function (err) {
     throw 'Exception occured while clicking element by waiting: ' + err;
     });
     };*/
    
    /*this.Click = function (elementToClickOn,index) {
     elementToClickOn.get(index).isDisplayed().then(function () {
     highlight(elementToClickOn.get(index));
     elementToClickOn.get(index).click().then(function () {
     consoleLog('clicked on element ' + elementToClickOn.locator()+' at index:'+index);
     }, function (error) {
     throw 'Failed to clicked on element ' + elementToClickOn.locator() +' at index:'+index +' and the error was ' + error;
     });
     }, function (error) {
     throw 'Given element ' + elementToClickOn.locator() + ' at index:'+index+' not displayed and the error was ' + error;
     });
     };*/
    
    /* function highlight(element) {
     /!*var webElement = element.getWebElement();
     highlightGivenElementInGivenColor(webElement, 'red');
     browser.sleep(100);
     highlightGivenElementInGivenColor(webElement, 'green');
     browser.sleep(100);
     browser.executeScript("arguments[0].style.border='0px solid'", webElement);*!/
     };*/

    function consoleLog(message) {
        console.log('       -> ' + message);
    };
    
    this.clickBrowserBackButton = clickBrowserBackButton;
};

module.exports = new userActions();