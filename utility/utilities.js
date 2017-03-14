var utils = function () {
    var EC = protractor.ExpectedConditions;
    this.shortWaitTime = 5000;
    this.longWaitTime = 60000;
    var fs = require('fs');
    var self = this;

    this.waitForElementToBeClickable = function (pageElement, waitTime) {
        browser.wait(EC.elementToBeClickable(pageElement), waitTime);
    };

    this.waitForElementToBeSelected = function (pageElement, waitTime) {
        browser.wait(EC.elementToBeSelected(pageElement), waitTime);
    };

    this.waitForAlertToBePresent = function (waitTime) {
        browser.wait(EC.alertIsPresent(), waitTime);
    };

    this.waitForElementWithText = function (pageElement, elementText, waitTime) {
        browser.wait(EC.textToBePresentInElement(pageElement, elementText), waitTime);
    };

    this.waitForElementWithValue = function (pageElement, elementValue, waitTime) {
        browser.wait(EC.textToBePresentInElementValue(pageElement, elementValue), waitTime);
    };

    this.waitForPageTitleContains = function (partialPageTitle, waitTime) {
        browser.wait(EC.titleContains(partialPageTitle), waitTime);
    };

    this.waitForPageTitle = function (pageTitle, waitTime) {
        browser.wait(EC.titleIs(pageTitle), waitTime);
    };

    this.waitForURLContains = function (partialURLText, waitTime) {
        browser.wait(EC.urlContains(partialURLText), waitTime);
    };

    //InDOM
    this.waitForElementPresent = function (pageElement, waitTime) {
        console.log('wait for');
        browser.wait(EC.presenceOf(pageElement), waitTime);
    };

    this.waitForElementNotPresent = function (pageElement, waitTime) {
        browser.wait(EC.stalenessOf(pageElement), waitTime);
    };

    //display Yes
    this.waitForElementVisibility = function (pageElement, waitTime) {
        browser.wait(EC.visibilityOf(pageElement), waitTime);
    };

    this.waitForElementInvisibility = function (pageElement, waitTime) {
        browser.wait(EC.invisibilityOf(pageElement), waitTime);
    };

    this.isElementPresent = function (pageElement) {
        return pageElement.isPresent().then(function (value) {
            return value;
        });
    };

    this.isElementDisplayed = function (pageElement) {
        return pageElement.isDisplayed().then(function (value) {
            return value;
        });
    };

    //Same as waitForElementVisibility
    this.waitForElementDisplay = function (elementToBeDisplayed, timeOut) {
        return browser.wait(function () {
            return elementToBeDisplayed.isDisplayed().then(function (val) {
                return true;
            }, function () {
                return false;
            });
        }, timeOut);
    };

    //Same as waitForElementNotPresent
    this.waitForElementDisappear = function (elementToBeDisplayed, timeOut) {
        browser.wait(function () {
            return elementToBeDisplayed.isDisplayed().then(function (val) {
                return !val;
            });
        }, timeOut);
    };

    this.mouseToElement = function (givenElement) {
        return browser.actions().mouseMove(givenElement).perform();
    };

    this.rightClickOnElement = function (givenElement) {
        browser.actions().mouseMove(givenElement).perform();
        browser.actions().click(protractor.Button.RIGHT).perform();
    };

    this.dragDrop = function (dragElement, dropElement) {
        browser.actions().dragAndDrop(dragElement, dropElement).perform();
    };

    this.deleteFolderRecursive = function (path) {
        if (fs.existsSync(path)) {
            fs.readdirSync(path).forEach(function (file, index) {
                var curPath = path + "/" + file;
                if (fs.lstatSync(curPath).isDirectory()) { // recurse
                    self.deleteFolderRecursive(curPath);
                } else { // delete file
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    };


    this.clearFolder=function(path){
        if (fs.existsSync(path)) {
            fs.readdirSync(path).forEach(function (file, index) {
                var curPath = path + "/" + file;
                if (fs.lstatSync(curPath).isDirectory()) { // recurse
                    self.clearFolder(curPath);
                } else { // delete file
                    fs.unlinkSync(curPath);
                }
            });

        }else{
            fs.mkdirSync(path);
        }
    }
    this.splitAtTheRateReturnArray=function(data){
        var array=data.split('@');
        return array;
    };

    this.splitWithSpaceReturnArray=function(data){
        return array=data.toLowerCase().trim().split(/\s+/);
     };

     this.checkDataExistence=function(srcArray,data){
       var dumArray=srcArray.slice();
         for(var i=0;i<dumArray.length;i++){
             if(data.toLowerCase().trim().includes(dumArray[i].toLowerCase().trim())){
                 dumArray.splice(i,1)  ;
                 i=i-1;
             }
         }
         return dumArray;
     }

     this.takeScreenShot=function(){
         browser.takeScreenshot().then(function (png) {
             var stream = fs.createWriteStream('Reports/test_reports/html_reports/Screenshots/' + result.description+ '.png');
             stream.write(new Buffer(png, 'base64'));
             stream.end();
     });
     };

    this.logEqualPromiseMessages = function (prom, exp, logger, msg) {
        prom.then(function (val) {
            if (val === exp) {
                logger.info('Matching Equal Promise Expected[' + exp + '] and Actual[' + val + '] ' + msg);
            } else {
                logger.error('Mismatch of Equal Promise Expected[' + exp + '] and Actual[' + val + '] ' + msg);
            }
        })
    }

    this.logObjectEqualMessages=function(act,exp,logger,msg){
        var under =require('underscore');
        if(under.isEqual(act,exp)){
            logger.info('Matching Equal Expected[' + exp + '] and Actual[' + act + '] ' + msg);
        }else{
            logger.error('Mismatch of Equal Expected[' + exp + '] and Actual[' + act + '] ' + msg);
        }
    }
    this.logEqualMessages = function (act, exp, logger, msg) {
        if (act === exp) {
            logger.info('Matching Equal Expected[' + exp + '] and Actual[' + act + '] ' + msg);
        } else {
            logger.error('Mismatch of Equal Expected[' + exp + '] and Actual[' + act + '] ' + msg);
        }
    }

    this.logBooleanMessages=function(act,exp,logger,msg){
        if(act===exp){
            logger.info('Matching Boolean values Expected['+exp+'] and Actual['+act+'] '+msg);
        }else{
            logger.error('Mismatch of Boolean values Expected['+exp+'] and Actual['+act+'] '+msg);
        }
    }
    this.getStructuredLocator=function(locator,logger) {
        var arr = this.splitAtTheRateReturnArray(locator);
        if (arr.length == 2) {
            if (arr[0] === 'css') {
                return $(arr[1]);
            } else if (arr[0] === 'id') {
                return element(by.id(arr[1]));
            } else if (arr[0] === 'model') {
                return element(by.model(+ arr[1]));
            }else{
                logger.error('locator type did not match with none of them'+arr[0]);
                throw 'locator type did not match with none of them'+arr[0];
            }
        }else {
                logger.error('Did not specified locator type or locator value or both for locator:'+locator);
                throw 'Did not specified locator type or locator value or both for locator:'+locator;
            }
    };

    this.getStructuredLocators=function(locator,logger) {
        var arr = this.splitAtTheRateReturnArray(locator);
        if (arr.length == 2) {
            if (arr[0] === 'css') {
                return element.all(by.css(arr[1]));
            } else if (arr[0] === 'id') {
                return element.all(by.id(arr[1]));
            } else if (arr[0] === 'model') {
                return element.all(by.model(arr[1]));
            }else{
                logger.error('locator type did not match with none of them'+arr[0])
                throw 'locator type did not match with none of them'+arr[0];
            }
        }else {
            logger.error('Did not specified locator type or locator value or both for locator:'+locator);
            throw 'Did not specified locator type or locator value or both for locator:'+locator;
        }
    };

    this.sortDescendingOrder=function(data){
        var newArr=data.slice();
        newArr.sort(function(a, b){return b - a});
        return newArr;
    };

    this.sortAscendingOrder=function(data){
        var newArr=data.slice();
        newArr.sort(function(a, b){return a - b});
        return newArr;
    };
    // return $('\''+arr[1]+'\'');
    this.getUniqueRandomNumbers=function(size) {
        if (size === 0||size===undefined) {
            throw 'Size/Range given to generate numbers is zero/less'
        } else {
        var o = fillArray(size);
        var uniqNums = [];
        // randomly pick one from the array
        for (var i = 0; i < size; i++) {
            var index = Math.floor(Math.random() * o.length);
            uniqNums.push(o[index]);
            o.splice(index, 1);
        }
        return (uniqNums);
    }
    }

    this.convertArrayDataToLowerCase=function(array){
        var x=array.map(toLowerCase);
        function toLowerCase(str){
            return str.toLowerCase();
        }
        return x;
    }

    this.checkTextPresenceInArray=function(array,keyword){
        var flag=false;
        for(var i=0;i<array.length;i++){
            flag=(array[i].toLowerCase()).includes(keyword.toLowerCase());
            if(flag===true){
                break;
            }
        }
        return flag;
    }

    function fillArray(range){
        var o=[];
        for(var i=0;i<range;i++){
            o[i]=i;
        }
        return o;
    };


    /*this.getHrefValue=function(element){
     var hrefValue;
     element.getAttribute('href').then(function(val){
     hrefValue=val;
     console.log('in dotthen:'+hrefValue)
     return hrefValue;
     });

     }*/

    /*this.waitForAjax=function(){
        // var ajax=browser.executeScript('return (document.readyState == "complete" && jQuery.active == 0)');
        // browser.wait(abc, 10 * 1000, 'Server should start within 5 seconds');
        function abc(){
             return browser.executeScript("return (document.readyState == 'complete' && jQuery.active == 0)").then(function (val){
                 return val
             });
        }
       /!* var ajax,i=0;
        do {
            console.log('hiiii');
            ajax=browser.executeScript('return (document.readyState == "complete" && jQuery.active == 0)');
            ajax.then(function(val){
                if(val==true){
                    return ;
                }

               browser.sleep(1000);
            });

        }
        while (i<50);*!/
    };*/
    /*this.waitForElementToBeClickable = function (pageElement, waitTime) {
        browser.wait(EC.elementToBeClickable(pageElement), waitTime);
    };*/
   /* driver.wait(function () {
        return driver.isElementPresent(
            webdriver.By.css('investments-component tbody tr'));
    }, 1000);
    public static void waitForAjax(WebDriver driver) {
        new WebDriverWait(driver, 60).until(new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver driver) {
                JavascriptExecutor js = (JavascriptExecutor) driver;
                return (Boolean) js.executeScript("return (document.readyState == 'complete' && jQuery.active == 0)");
//	            return (Boolean) js.executeScript("return jQuery.active == 0");
            }
        });
    }*/
    /*this.createFolderRecursive = function (client) {
     var date = new Date().toString().split(" ");
     // var folderName='Reports/'+client+'_'+date[1]+date[2]+'_'+date[4];
     var folderName=('Reports/'+client+'_'+date[1]+date[2]+'_'+date[4].toString()).replace(/[:]/g,"-");
     // console.log(folder);
     // var folder=folderName;
     // console.log(folder+' folder')
     /!* var fse = require('fs-extra');
     var dir = './'+folder;
     fse.ensureDir(dir, function (err) {
     console.log(err) // => null
     // dir has now been created, including the directory it is to be placed in
     })
     *!/        // var mkdirp = require('mkdirp');
     /!*mkdirp(folder, function (err) {

     console.log(folder)
     if (err) console.error(err)
     else console.log('pow!')
     });
     *!/console.log(folderName);
     if (fs.existsSync(folderName)) {
     console.log('path exists')
     }else{
     console.log('path not exists')
     fs.mkdirSync(folderName);
     }
     /!*try {
     fs.statSync(folderName);
     } catch(e) {
     fs.mkdirSync(folderName);
     }*!/
     return folderName;
     };*/
    /* this.getRandomNumber = function () {
     return new Date().getTime();
     };
     */
};
module.exports = new utils();