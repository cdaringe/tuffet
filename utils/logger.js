'use strict';
var winston = require('winston');
var logger;
module.exports = function(opts) {
    if (logger) {
        return logger;
    }
    if (!opts) {
        throw new ReferenceError('opts `{}` required to configure winston logger');
    }
    var errorLevel = opts.verbose ? 'verbose' : 'error';
    logger = new (winston.Logger)({
        transports: [
            new (winston.transports.Console)({
                level: errorLevel,
                colorize: true
            }),
        ]
    });
    return logger;
};
