'use strict';
module.exports = function() {
    var opts = require("nomnom")
    .option('clear', {
        abbr: 'clr',
        flag: true,
        help: 'clear a database. $ tuffet <db> --clear'
    })
    .option('deleteDatabases', {
        abbr: 'dd',
        flag: true,
        help: 'delete all databases, -sys level dbs'
    })
    .option('version', {
        flag: true,
        help: 'print version and exit',
        callback: function() {
            return "version 0.0.1";
        }
    })
    .option('verbose', {
        abbr: 'v',
        flag: true,
        help: 'verbose output'
    })
    .parse();

    return Promise.resolve(opts);
};
