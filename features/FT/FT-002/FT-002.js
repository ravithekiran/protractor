/**
 * Created by Ravikiran on 3/7/2017.
 */

var common = require('../../common/common');
var ft_common = require('../common/ft_common')
var log4js = require('log4js');
var sa=require('../../../utility/logFileConfig.js').getLogger(log4js);
var logger = sa.getLogger("homePage");

describe('Validating Links in Footer', function () {
    logger.info('*****Started Footer validation test case-FT-002*****');
    common.loadHomePage(logger);
    ft_common.validateFooterLinksAndText(logger);
});


