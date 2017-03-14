var eventesting_validationfile   = "https://deloitteglobalqaresources.s3.amazonaws.com/EventsFrameWork/FinalValidation.js";
var comutls = require(browser.params.utilities);
var userActions = require(browser.params.userActions);
var async = require('asyncawait/async');
var await = require('asyncawait/await');

var async = require('asyncawait/async');
var await = require('asyncawait/await');
var under =require('underscore');
/*var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs')); // adds Async() versions that return promises
var path = require('path');
var _ = require('lodash');*/

/** Returns the number of files in the given directory. */
describe('Events Validation',function() {
    var x;
    it('Launch Home Page ', function () {

        // browser.driver.get('https://tollbrothers-qa.phenompro.com/');
        var a=['a','b','c'];
        var b=['a','b','c'];
        console.log('Object comparision'+under.isEqual(a,b))

    });
    /*it('it2',function (){
        console.log('in last it'+x)
    });
    it('it3',function (){
        console.log('in last it'+x)
        throw "intentional Fail"
    });*/
   /* it('async', function () {
var countFiles=function(){
    return browser.driver.getCurrentUrl().then(function (url) {
        return url;
    });

}*/

        /*var countFiles = async(function () {
            var url = await(browser.driver.getCurrentUrl());
            /!*var paths = _.map(files, function (file) { return path.join(dir, file); });
             var stats = await (_.map(paths, function (path) { return fs.statAsync(path); })); // parallel!*!/
            return url;
        });*/

// Give it a spin
       /*countFiles().then(function(val){
            x=val;
        })*/
        // console.log('in last it'+x)

            /*.then(function (num) {
                console.log('There are ' + num + ' files in ' + __dirname);
            })
            .catch(function (err) {
                console.log('Something went wrong: ' + err);
            });*/
   /* });*/
   /* it('it4',function (){
        console.log('in last it'+x)
    });*/

});
// exports.toWork = function(){




       /* it('Load JS files', function () {
console.log('outer async:'+asyncfunc1.then(function(val){
    console.log('inner async:'+val)
    return val;
}))*/
            /* browser.driver.getCurrentUrl().then(function(url){

             browser.driver.getTitle().then(function(title){
             console.log(title)
             console.log(url)
             })*/
       /* });

    });*/

    /*var asyncfunc1=async(function(){
    var title=await(browser.driver.getCurrentUrl());
    return title;
})*/

async(function asyncfunc1(){
    var title=await(browser.driver.getCurrentUrl());
    return title;
})

       /* try {
            // https://deloitteglobalqaresources.s3.amazonaws.com/EventsFrameWork/rules.js
            browser.executeScript('var rscript = document.createElement("script");'+
                'rscript.type = "text/javascript";'+
                'rscript.src = "https://deloitteglobalqaresources.s3.amazonaws.com/CTR_Impressions/rules.js";' +
                'document.body.appendChild(rscript);');
            // 'rscript.onload = function() {alert("rules script loaded successfully");};'+
            browser.executeScript('var script = document.createElement("script");'+
                'script.type = "text/javascript";'+
                'script.src = "https://deloitteglobalqaresources.s3.amazonaws.com/EventsFrameWork/FinalValidation.js";' +
                'document.body.appendChild(script);');
            // 'script.onload = function() {alert("validation script loaded successfully");};'+
            browser.sleep(5000);
        } catch(error){
            alert("exception raised while loading script: " + error)
        }*/

   /* it('Validating footer_menu_click Event',function(){
        var count1=(element.all(by.css("div[data-widget*='FT'] span:not(.toll-links):not(.socialmenu) a")));
        count1.count().then(function(vall){
           console.log('counts:'+vall)

        if(vall!=0){
            var elts=(element.all(by.css("div[data-widget*='FT'] span:not(.toll-links):not(.socialmenu) a")));
            console.log('Numbers of links:'+vall);
            for(var i=0;i<vall;i++){
                console.log('In for loop'+i);
            /!*elts.get(i).getText().then(function(val){
                console.log('footerText:'+val);*!/
                clickfooter(elts.get(i));
                browser.sleep(2000)
                browser.switchTo().alert().getText().then(function(alertText){

                 browser.switchTo().alert().accept();
                    console.log('AlertMessage: '+alertText)   ;
                });
                browser.getAllWindowHandles().then(function(wind){
                    console.log('New window'+wind.length)
                    if(wind.length>1){
                        browser.switchTo().window(wind[2]);
                        console.log('Switched to new window')
                        browser.close();
                        browser.switchTo().window(1);
                        browser.sleep(8000)
                    }else{
                        console.log('Same window')
                        browser.navigate().back();
                    }
                    })
           /!* })
*!/
        }
        }else{
            console.log('in else block')
           // xit('There are No FT menu clicks events to validate')
        }
        });
    })
    });*/


