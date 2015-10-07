'use strict';
module.exports = function() {
    var fs = require('fs');
    var os = require('os');
    var path = require('path');
    var url = require('url');
    var failCount = 0;
    var couchyrcPath = path.join(os.homedir(), '.tuffet');

    var readConfig = function() {
        return fs.readFileAsync(couchyrcPath);
    };

    var parseConfig = function(config) {
        return JSON.parse(config);
    };

    var handleReadConfigFail = function(err) {
        var config;
        if (failCount) {
            throw err; // permit only single exec of handleReadConfigFail
        }
        ++failCount;

        if (err && err.message && !!err.message.match('no such')) {
            // couldnt find config
            // upsert config to file with defaults
            config = {
                url: url.format({
                    protocol: 'http',
                    hostname: 'localhost',
                    port: 5984
                }),
                httpDefaults: {
                    timeout: 20
                }
            };

            return fs.writeFileAsync(couchyrcPath, JSON.stringify(config, null, 4))
            .then(getConfig);
        }

        throw err;
    };

    var getConfig = function() {
        return readConfig()
        .then(parseConfig)
        .catch(handleReadConfigFail);
    };

    return getConfig();
};
