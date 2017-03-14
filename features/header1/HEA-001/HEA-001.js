/**
 * Created by Ravikiran on 3/7/2017.
 */

var common = require('../../common/common');
var hea_common = require('../common/hea_common')
var log4js = require('log4js');
var sa=require('../../../utility/logFileConfig.js').getLogger(log4js);
var logger = sa.getLogger("homePage");

describe('Validating links in header', function () {
    logger.info('*****Started Links validation in Header test case-HEA-001*****');
    common.loadHomePage(logger);
    hea_common.validateHeaderLinksAndText(logger);
});

