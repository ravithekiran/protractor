var log4jsGen = {
getLogger: function getLogger(log4js) {
    // log4js.clearAppenders();
    log4js.configure({
        appenders: [
            { type: 'file',
                maxLogSize: 20480,
                backups: 3,
                filename: './Reports/Logs/homePageLogs.log',
                category: 'homePage'
            },
            { type: 'file',
               maxLogSize: 20480,
                backups: 3,
                filename: './Reports/Logs/searchPageLogs.log',
                category: 'searchPage'
            },
            { type: 'file',
                maxLogSize: 20480,
                backups: 3,
                filename: './Reports/Logs/jobDescriptionPageLogs.log',
                category: 'jdPage'
            }
        ],
        // replaceConsole: true
    });/*
     "type": "file",
     "absolute": true,
     "filename": "/absolute/path/to/log_file.log",
     "maxLogSize": 20480,
     "backups": 10,
log4js.loadAppender('file');
log4js.lo
log4js.addAppender(log4js.appenders.file('./ExecutionLog.log'), 'logs');*/
// var logger = log4js.getLogger('logs');
return log4js;
}
};
module.exports = log4jsGen;