var util = require(browser.params.utilities);
var userData = require(browser.params.userData);
// var search = require('../../global_search/co/global_search.co');
var userActions = require(browser.params.userActions);
// var clientVar='../../../data/test_data/'+browser.params.site+'/';
// var obj=require(clientVar+'clientSpecificData.json');
// var clientData=require(clientVar+'footerData.json');
// var utls = require(browser.params.utilities);
exports.toWork = function (logger) {
    describe('load phenom home page', function () {
        it('Launch Home Page ', function () {
            console.log(browser.params.userData);
            logger.error('HomePage Launched')
            // console.log('URL:'+browser.params.userData.appUrl);
            console.log('URL:'+userData[browser.params.environemt]);
            // browser.driver.get(userData.qa_url);
            browser.driver.get(userData[browser.params.environemt]);
            // expect(browser.driver.getCurrentUrl()).toBe(userData.appUrl + '/');
            // util.waitForElementDisplay(search.searchBox, util.shortWaitTime);
        });
    });

    /*describe('FT',function(){
        var linkscount;
        var excelLinksCount=clientData.footer_links.length;
        var getfooterLinks=utls.getStructuredLocators(obj.footer_links);
        it('get links count',function(){
            getfooterLinks.count().then(function (count) {
                linkscount=count;
            });
        });
         // console.log('Locator:'+obj.footer_links);

        console.log('Counts: '+excelLinksCount);
        getfooterLinks.count().then(function (count) {
            if(count==excelLinksCount){
                for(var i=0;i<count;i++){
                    var labelex=clientData.footer_links[i].label;
                    var urlex=clientData.footer_links[i].url;
                    FT(getfooterLinks,i);

                }
            }else{
                throw 'Links provided in testdata and links in Site are mismatching';
            }
        })
    });


    var FT=function(loc,idx){

        it('Entering  Footer ' , function () {
        console.log('Path: '+clientData.footer_links[idx].label);
        if(loc.get(idx).getText().then(function (sitelabel) {
                console.log('Label: '+sitelabel);
                // console.log('TestLabel: '+clientData.footer_links[i].label);
                if(sitelabel==labelex){
                    userActions.JavaScriptClick(getfooterLinks.get(idx));
                    console.log("Footer url:"+clientData.footer_links[idx].url);
                    console.log("Current url:"+browser.getCurrentUrl());
                    expect(clientData.footer_links[idx].url).toEqual(browser.getCurrentUrl());
                }else{
                    throw 'Labels mismatch while comparing with test data and site'
                }
            }));
    });
    }*/
};