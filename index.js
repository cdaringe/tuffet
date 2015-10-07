/**
 * Provides couchdb cmd-line utilities
 */
var ready = require('./utils/boot.js')();
var execCmd = require('./utils/exec-cmd.js');
var axios = require('axios');

var log = function(arg) {
    if (!arg) { return; }
    console.dir(arg);
};
ready.then(function(bootResults) {
    var opts = bootResults.cliOpts;
    var config = bootResults.config;
    return execCmd(opts, config).then(log);
});
