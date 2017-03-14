/*var log4js = require('log4js');
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('data.log'), 'logs');
var logger = log4js.getLogger('logs');*/
var log4js = require('log4js');
var sa=require('../../utility/logFileConfig.js').getLogger(log4js);
var logger = sa.getLogger("logs");
logger.info('Started testcases Header ');
require('../common/specs/load_home_page_common').toWork(logger);
// logger.info('Cheese is Gouda.');
// require('./specs/header_links_spec').toWork(logger);