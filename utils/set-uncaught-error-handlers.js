'use strict';
/**
 * Setup process listeners to handle uncaught exceptions
 * @return {undefined}
 */
module.exports = function(opts) {
    var defaults = require('lodash.defaults');
    var uncaughtOpts = defaults({}, opts, { root: global });
    require(__dirname + '/promise-uncaught-polyfill.js')(uncaughtOpts);
    process.on('uncaughtException', function(err) {
        console.log('Caught exception: ' + err);
        console.dir(err);
    });

    return Promise.resolve();
};
