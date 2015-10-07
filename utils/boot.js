'use strict';
var boot = function() {
    var bootskies = [
        'set-uncaught-error-handlers',
        'promisify-fs',
        'load-config', // mandatory final n-1 arg
        'parse-cli',   // mandatory final     arg (see mapResults)
    ].map(function(dep) {
        return require(__dirname + '/' + dep + '.js')();
    });

    return Promise.all(bootskies).then(function mapResults(r) {
        var cliOpts = r[r.length - 1];
        require('./logger.js')({ verbose: cliOpts.verbose });
        return {
            cliOpts: cliOpts,
            config: r[r.length - 2]
        };
    });
};

module.exports = boot;
