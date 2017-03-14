/**
 * Created by Ravikiran on 3/2/2017.
 */
var common=require('../../common/common');
var ta_common=require('../common/ta_common');
var log4js = require('log4js');
var sa=require('../../../utility/logFileConfig.js').getLogger(log4js);
var logger = sa.getLogger("homePage");

describe('TA-005 TypeAhead-Keyword Suggestions Validation',function(){
    logger.info('*****TA-005 TypeAhead-Keyword Suggestions Validation*****');
    common.loadHomePage(logger);
    ta_common.keywordTypeAhead(logger);
});


