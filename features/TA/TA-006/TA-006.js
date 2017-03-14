/**
 * Created by Ravikiran on 2/10/2017.
 */
var common=require('../../common/common');
var ta_common=require('../common/ta_common');
var log4js = require('log4js');
var sa=require('../../../utility/logFileConfig.js').getLogger(log4js);
var logger = sa.getLogger("searchPage");

    describe('TA-006 TypeAhead-Location Suggestions Validation',function(){
        logger.info('*****TA-006 TypeAhead-Location Suggestions Validation*****');
        common.loadHomePage(logger)
        ta_common.locationTypeAhead(logger);
     });



