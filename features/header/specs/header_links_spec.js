var appData = require(browser.params.applicationData);
var userData = require(browser.params.userData);
var header = require('../../header/co/header.co');
var objects = require('../../../data/app_data/elements.json');
// var jsonKeywords=require('../../../data/user_data/keywords.json');
var utls = require(browser.params.utilities);
var userActions = require(browser.params.userActions);
var datewrapper = require('moment');
exports.toWork = function (logger) {

    /*    describe('header menu links test', function () {
     var headerLinks = appData.headerLinks;
     for (var i = 0; i < headerLinks.length; i++) {
     var link = header.getHeaderLinkByText(headerLinks[i][0]);
     var pageUrl = headerLinks[i][1];
     if (i == 2 || i == 3)
     require('../../common/specs/link_test_common').toWork(link, pageUrl, false);
     else
     require('../../common/specs/link_test_common').toWork(link, pageUrl, true);
     }
     describe('wish list link in header should navigate to job cart', function () {
     require('../../common/specs/link_test_common').toWork(header.wishListInHeader, appData.wishListInHeader[1], true);
     });

     describe('phenom logo should navigate to home page', function () {
     require('../../common/specs/link_test_common').toWork(header.logoImg, userData.appUrl + '/' + appData.homeText, true);
     });
     });*/
    /* describe('Validating News Link in header by clicking it',function () {
     var link=$$('.wish-list a')
     /!* it('clicking news link in the header section',function () {*!/
     console.log("before link");

     link=header.getHeaderLinkByText(appData.headerLinkNews);
     /!*});*!/
     require('../../common/specs/link_test_common').toWork(link, userData.headerLinkNewsPageUrl, false);
     })*/

    /*  describe('validating categories in onClick widget',function(){
     var searchBox,categories;
     var category;
     searchBox=utls.getStructuredLocators(objects.globalsearch.searchbox);
     categories=utls.getStructuredLocators(objects.globalsearch.categoriesjobcount);
     it('Clicking on the Global Search box', function(){
     searchBox.each(function(loc) {
     utls.isElementDisplayed(loc).then(function(isDisplayed)
     {
     if (isDisplayed) {
     userActions.clearSearchBox(loc)
     userActions.Click(loc);
     return;
     }
     });
     });
     });
     it('Get all Categories from onclick widget',function(){
     categories.getText().then(function(allCategories){
     if(allCategories===undefined||allCategories.length===0){
     throw 'Number of categories in the Onclick widget are Zero'
     }else {
     //Copying array data into New Array
     category=allCategories;
     }
     });
     });
     it('Validating Ascending order of categories in OnClick Widget ',function(){
     var categoriesDes = category.slice();
     categoriesDes.sort();
     expect(categoriesDes).toEqual(category, 'Checking for array equivalance');
     });
     });
     describe('Landing into SearchResults Page through Onclick',function(){
     var searchBox,categories;
     var category=[];
     searchBox=utls.getStructuredLocators(objects.globalsearch.searchbox);
     categories=utls.getStructuredLocators(objects.globalsearch.categoriesjobcount);
     it('Clicking on the Global Search box', function(){
     searchBox.each(function(loc) {
     utls.isElementDisplayed(loc).then(function(isDisplayed)
     {
     if (isDisplayed) {
     userActions.clearSearchBox(loc)
     userActions.Click(loc);
     return;
     }
     });
     });
     });
     it('Get all categories', function(){
     categories.getText().then(function(allCategories){
     if(allCategories===undefined||allCategories.length===0){
     throw 'Number of categories in the Onclick widget are Zero'
     }else {
     //Copying array data into New Array
     category=allCategories;
     }
     });
     })
     it('Click on any random category',function(){
     var ranNums=utls.getUniqueRandomNumbers(category.length);
     userActions.Click(categories.get(ranNums[0]));
     })

     });
     describe('Validating Jobs sorting order after clicking SortByRecent',function(){
     var sortByRecent=utls.getStructuredLocator(objects.search.sortbyrecent);
     var postedDates=utls.getStructuredLocators(objects.search.posteddates);
     var postedDatesSrc=[];
     it('clicking on SortByrecent',function(){
     utls.waitForElementPresent(sortByRecent,3000)
     browser.sleep(3000)
     userActions.selectDropDownByIndex(sortByRecent,1);
     browser.sleep(3000)
     });
     it('Get posted dates of all Jobs and store them in date Format',function(){
     postedDates.getText().then(function(allPostedDates){
     if(allPostedDates===undefined||allPostedDates.length===0){
     throw 'Number of jobs/Posted dates in the Search page is Zero'
     }else {
     allPostedDates.forEach(function(val){
     postedDatesSrc.push(datewrapper(val, "MMM Do YYYY"));
     });
     }
     });
     });
     it('Sort the jobs based on descending order and Validate them', function(){
     console.log('source dates:'+postedDatesSrc);
     var postedDatesDes = postedDatesSrc.slice();
     postedDatesDes=utls.sortDescendingOrder(postedDatesDes);
     console.log('des dates:'+postedDatesDes)
     expect(postedDatesDes).toEqual(postedDatesSrc, 'Checking for array equivalance');
     });
     });*/

    var typeKeyword = function (searchBox, keyword) {
        it('Entering  keyword ' + keyword, function () {
            logger.info('Entering  keyword ' + keyword);
            userActions.Click(searchBox);
        console.log('entered data:'+keyword);
            userActions.ClearAndType(searchBox, keyword);
            browser.sleep(1000);
            browser.waitForAngular();
         });
    }

    var hitEnterButton = function (searchBox) {
        it('Clicking  enter key', function () {
            userActions.TypeText(searchBox, protractor.Key.ENTER);
            browser.sleep(100);
            browser.waitForAngular();
        });
    }

    var checkJob = function (keyword, jobTitles) {
        it('checking each job', function () {
            jobTitles.count().then(function (count) {
                if (count != 0) {
                    console.log('First 3 job titles ')
                    for (var j = 0; ((j < count) && (j < 3)); j++) {
                        jobTitles.get(j).getText().then(function (text) {
                            console.log(text)
                        });
                        userActions.Click(jobTitles.get(j));
                        docStatus(5000)

                        browser.navigate().back();
                        docStatus(5000);
                    }
                } else {
                    console.log('there are no jobs with given keyword ' + keyword)
                }
            })
        });
    }
    /*describe('performing keyword search',function(){
     var testData=require('../../../data/user_data/keywords.json');
     var searchBox,jobTitles;
     searchBox=utls.getStructuredLocator(objects.globalsearch.searchbox);
     jobTitles=utls.getStructuredLocators(objects.search.jobtitles);
     var testDataCount=testData.keywords.length;
     console.log('num of keywords'+testDataCount);
     var ranNumArr=utls.getUniqueRandomNumbers(testDataCount);
     var jobtitle,jdtext;
     console.log('Array of RanNums'+ranNumArr)
     var idx,keyword;
     for(var i=0;i<5;i++){
     idx= ranNumArr[i];
     /!* console.log(testData.keywords[idx])
     console.log(idx+'****'+testData.keywords[idx].keyword);*!/
     keyword=testData.keywords[idx].keyword
     typeKeyword(searchBox,keyword);
     hitEnterButton(searchBox);
     browser.sleep(1000)
     // checkJob(keyword,jobTitles)

     }


     });*/

       var locationTypeAhead = function (element, typeAheadData) {
           /*describe('TypeAhead Location Searches Validation ', function () {*/
               logger.info('Location search')
               /*it('adadad',function() {*/
                   var data = typeAheadData.locations;

                   var typeAheadLocElt = utls.getStructuredLocators(objects.typeahead.locations);
                    for (var i = 0; i < data.length; i++) {

                        // label1:{
                        // data.every(function (data,idx) {
                        // data1 = data[i];
                        if (i == 5) {
                            console.log('breaking');
                            break;
                        }
                        // console.log('data:'+data[i]);
                        typeKeyword(element, data[i]);
                        getAllSuggestionsAndValidate(typeAheadLocElt, data[i], browser.params.typeAheadLocation);

                        /*userActions.Click(element);
                         userActions.ClearAndType(element, data);
                         browser.sleep(1000);
                         browser.waitForAngular();
                         typeAheadLocElt.getText().then(function (suggestions) {
                         console.log('Got all Suggestions:' + suggestions);
                         if (suggestions.length == 0 || suggestions === undefined) {
                         expect(true).toBeFalsy(' Suggested List is Empty for entered Keyword:' + data);
                         } else {
                         expect(utls.checkTextPresenceInArray(suggestions, data)).toBe(true, 'suggested List[' + suggestions + '] is not having entered Keyword:' + data);
                         }
                         });*/
                        // typeKeyword(element, data[i]);

                        // getAllSuggestionsAndValidate(typeAheadLocElt, data[i], browser.params.typeAheadLocation);
                        /* }*/
                    }
                 /*  });*/

             /*  });*/

           /*});*/
       }

   /* }*/

    var categoryTypeAhead = function (element, typeAheadData) {
        describe('TypeAhead Category Validation ', function () {
            var data = typeAheadData.category;
            var typeAheadElt = utls.getStructuredLocators(objects.typeahead.categories);
            for (var i = 0; i < data.length; i++) {
                typeKeyword(element, data[i]);
                getAllSuggestionsAndValidate(typeAheadElt, data[i], browser.params.typeAheadCategory);
            }
        });
    }

    var keywordTypeAhead = function (element, typeAheadData) {
        describe('TypeAhead Keyword Searches Validation ', function () {
            var data = typeAheadData.keywords;
            var typeAheadElt = utls.getStructuredLocators(objects.typeahead.jobs);
            for (var i = 0; i < data.length; i++) {
                typeKeyword(element, data[i]);
                getAllSuggestionsAndValidate(typeAheadElt, data[i], browser.params.typeAheadKeyword);
            }
        });
    }

    var getAllSuggestionsAndValidate = function (element, keyword, typeAheadType) {
        it('Getting  all ' + typeAheadType + 'suggestions from TypeAhead '+keyword, function () {

            element.getText().then(function (suggestions) {
                console.log('Got all Suggestions:' + suggestions);
                logger.info('Text got from dropdown:'+suggestions);
                if (suggestions.length == 0 || suggestions === undefined) {
                    expect(true).toBeFalsy('"' + typeAheadType + '" Suggested List is Empty for entered Keyword:' + keyword);
                } else {
                   expect(utls.checkTextPresenceInArray(suggestions, keyword)).toBe(true, '"' + typeAheadType + '" suggested List[' + suggestions + '] is not having entered Keyword:' + keyword);
                }
            });
        });

       /* it('Validating ' + typeAheadType + ' in the suggested list', function () {
            if (suggestions.length === 0 || suggestions === undefined) {
                expect(suggestions).not.toBeNull('"' + typeAheadType + '" Suggested List is Empty for entered Keyword:' + keyword);
            } else {
                expect(utls.checkTextPresenceInArray(suggestions, keyword)).toBe(true, '"' + typeAheadType + '" suggested List[' + suggestions + '] is not having entered Keyword:' + keyword);
            }
        });*/

    }

    var recentSearchTypeAhead = function (element, typeAheadData) {
        describe('TypeAhead Recent Searches Validation ', function () {
            var data = typeAheadData.keywords;
            console.log('TestData:' + data);
            var typeAheadElt = utls.getStructuredLocators(objects.typeahead.recentsearches);
            var suggestionsManual = [];
            function validateRecentSearchSuggestions(index) {
                it('Getting  all suggestions from TypeAhead and validating', function () {
                    if (index != 0) {
                        typeAheadElt.getText().then(function (allSuggestions) {
                            allSuggestions.splice(3);
                            expect(suggestionsManual).toEqual(allSuggestions,'Recent Searches data is not Matching')
                            console.log('Suggested manual:' + suggestionsManual);
                            console.log('Site Suggestions:' + allSuggestions);
                        });
                    }
                });
            }

            function pressEnterConstructSuggestions(keyword) {
                it('Pressing ENTER Key', function () {
                    element.sendKeys(protractor.Key.ENTER);
                });
                it('Constructing recent searches data Manually', function () {
                    suggestionsManual = recentSearchListManualConstruct(suggestionsManual, keyword);
                });
            }

            for (var i = 0; ((i < data.length) && (i < 10)); i++) {
                typeKeyword(element, data[i]);
                validateRecentSearchSuggestions(i);
                pressEnterConstructSuggestions(data[i]);
            }
        })
    }

    var recentSearchListManualConstruct = function (recentSearchDes, keyword) {
        if (recentSearchDes.length < 3) {
            if (recentSearchDes.indexOf(keyword) != -1) {
                recentSearchDes.splice(recentSearchDes.indexOf(keyword), 1);
                recentSearchDes.unshift(keyword);
            } else {
                recentSearchDes.unshift(keyword);
            }
        } else {
            if (recentSearchDes.indexOf(keyword) != -1) {
                recentSearchDes.splice(recentSearchDes.indexOf(keyword), 1);
                recentSearchDes.unshift(keyword);
            } else {
                recentSearchDes.pop();
                recentSearchDes.unshift(keyword);
            }
        }

        return recentSearchDes;
    }

    describe('TypeAhead Validation', function () {
        logger.info('In typeAhead Bock')
        var typeAheadData = require('../../../data/user_data/typeahead.json');
        var searchBox = utls.getStructuredLocator(objects.globalsearch.searchbox);
          // locationTypeAhead(searchBox,typeAheadData);
         /*categoryTypeAhead(searchBox,typeAheadData);
         keywordTypeAhead(searchBox,typeAheadData);*/
        recentSearchTypeAhead(searchBox, typeAheadData);
    });


};