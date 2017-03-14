/**
 * Created by Ravikiran on 2/10/2017.
 */
var userActions = require(browser.params.userActions);
var utls = require(browser.params.utilities);
var typeAheadTestData = require(browser.params.clientSpecificTestData+'typeahead.json');
var common=require('../../common/common');
var commonElts = require('../../../data/common/elements.json');


var ta_common = function () {

    function validateRecentSearchSuggestions(typeAheadElt, index, suggestionsManual) {
        it('Getting  all suggestions from TypeAhead and validating', function () {
            if (index != 0) {
                typeAheadElt.getText().then(function (allSuggestions) {
                    allSuggestions.splice(3);
                    expect(suggestionsManual).toEqual(allSuggestions, 'Recent Searches data is not Matching')
                    console.log('Suggested manual:' + suggestionsManual);
                    console.log('Site Suggestions:' + allSuggestions);
                }).catch(function (err) {
                    console.log('Exception occured while getting suggestions from TypeAhead: ' + err)
                });
            }
        });
    }

    function pressEnterConstructSuggestions(element, keyword, suggestionsManual,logger) {
        it('Pressing ENTER Key', function () {
            element.sendKeys(protractor.Key.ENTER);
            logger.info('Clicked Enter Key')
        });
        it('Constructing recent searches data Manually', function () {
            suggestionsManual = recentSearchListManualConstruct(suggestionsManual, keyword,logger);
        });
        return suggestionsManual;
    }

    function recentSearchListManualConstruct(recentSearchDes, keyword,logger) {
        logger.info('Keyword got for manual to construct recent searches Manually:' + keyword)
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
        logger.info('Recent Searches constructed manually:'+recentSearchDes);
        return recentSearchDes;
    };


    function getAllSuggestionsAndValidate(element, keyword, typeAheadType,logger) {
        var flag;
        it('Getting  all ' + typeAheadType + ' suggestions from TypeAhead ' + keyword, function () {
            element.getText().then(function (suggestions) {
                logger.info('Got all Suggestions:' + suggestions);
                if (suggestions.length == 0 || suggestions === undefined) {
                    logger.error(' Suggested List is Empty for entered Keyword:' + keyword)
                    expect(true).toBeFalsy('Suggested List is Empty for entered Keyword:' + keyword);
                } else {
                    flag=utls.checkTextPresenceInArray(suggestions, keyword);
                    utls.logBooleanMessages(flag,true,logger,'"' + typeAheadType + '" suggested List[' + suggestions + ']');
                    expect(flag).toBe(true, '"' + typeAheadType + '" suggested List[' + suggestions + '] is not having entered Keyword:' + keyword);
                }
            }).catch(function (err) {
                logger.error('Exception occurred while getting all '+typeAheadType + ' suggestions from TypeAhead with keyword' + keyword +':'+ err);
                throw 'Exception occurred while getting all '+typeAheadType + ' suggestions from TypeAhead with keyword' + keyword +':'+ err;
            });
        });
    }

    function typeKeyword(searchBox, keyword,logger) {
        it('Entering  keyword ' + keyword, function () {
            userActions.clickElement(searchBox,logger);
            userActions.clearAndType(searchBox, keyword,logger);
            browser.sleep(1000);
            browser.waitForAngular();
        });
    }

    this.locationTypeAhead=function(logger) {
        var searchBoxElt = utls.getStructuredLocator(commonElts.globalsearch.searchbox,logger);
        var data = typeAheadTestData.locations_data;
        var typeAheadLocElt = utls.getStructuredLocators(commonElts.typeahead.locations,logger);
        for (var i = 0; i < data.length; i++) {
            typeKeyword(searchBoxElt, data[i],logger);
            getAllSuggestionsAndValidate(typeAheadLocElt, data[i], browser.params.typeAheadLocation,logger);
        }
    }

    this.recentSearchTypeAhead=function(logger){
        var searchBoxElt = utls.getStructuredLocator(commonElts.globalsearch.searchbox,logger);
        var data = typeAheadTestData.keywords_data;
        var suggestionsManual = [];
        var typeAheadRecentSearchElts = utls.getStructuredLocators(commonElts.typeahead.recentsearches,logger);
        for (var i = 0; ((i < data.length) && (i < 10)); i++) {
            typeKeyword(searchBoxElt, data[i],logger);
            it('Getting  all Recent suggestions from TypeAhead and validating for data '+i, function () {
                if (i != 0) {
                        typeAheadRecentSearchElts.getText().then(function (allSuggestions) {
                        allSuggestions.splice(3);//adds/removes items to/from an array, and returns the removed item
                        utls.logObjectEqualMessages(allSuggestions,suggestionsManual,logger,'recent search suggestions')
                        expect(suggestionsManual).toEqual(allSuggestions,'Mismatch of recent search suggestions')
                        console.log('Suggested manual:' + suggestionsManual);
                        console.log('Site Type:'+typeof(allSuggestions)+' manual type:'+typeof(suggestionsManual))
                        console.log('Site Suggestions:' + allSuggestions);
                    }).catch(function(excp){
                        logger.error('Exception occured while getting suggestions from TypeAhead: '+excp)
                    });
                }
            });
            suggestionsManual=pressEnterConstructSuggestions(searchBoxElt,data[i],suggestionsManual,logger);

        }
    }

    this.keywordTypeAhead=function(logger) {
        var searchBoxElt = utls.getStructuredLocator(commonElts.globalsearch.searchbox,logger);
        var data = typeAheadTestData.keywords_data;
        var typeAheadKeywordElt = utls.getStructuredLocators(commonElts.typeahead.jobs,logger);
        for (var i = 0; i < data.length; i++) {
            typeKeyword(searchBoxElt, data[i],logger);
            getAllSuggestionsAndValidate(typeAheadKeywordElt, data[i], browser.params.typeAheadKeyword,logger);
        }
    }


    this.typeKeyword = typeKeyword;
    this.getAllSuggestionsAndValidate = getAllSuggestionsAndValidate;
    this.recentSearchListManualConstruct = recentSearchListManualConstruct;
    this.pressEnterConstructSuggestions = pressEnterConstructSuggestions;
    this.validateRecentSearchSuggestions = validateRecentSearchSuggestions;
};
module.exports = new ta_common();




