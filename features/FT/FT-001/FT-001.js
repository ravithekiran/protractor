/**
 * Created by Ravikiran on 3/7/2017.
 */

var common = require('../../common/common');
var ft_common = require('../common/ft_common')
var log4js = require('log4js');
var sa=require('../../../utility/logFileConfig.js').getLogger(log4js);
var logger = sa.getLogger("homePage");

describe('Validating footer sharing links in footer', function () {
    logger.info('*****Started Footer Sharing Links validation test case-FT-001*****');
    common.loadHomePage(logger);
    ft_common.validateSharingIconLinks(logger);
});

