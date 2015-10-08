'use strict';
var axios = require('axios');
var url = require('url');
var couchCmd = function(opts, config) {
    var logger = require('./logger.js')();
    var cliArgs = opts._;
    var method = cliArgs[0];
    var route  = cliArgs[1];
    var json = cliArgs[2];
    try {
        json = JSON.parse(json);
    } catch(err) {
        // uh err umm uhh
    }
    if (method && route) {
        return axios({
            method: method.toLowerCase(),
            url: url.resolve(config.url, route),
            timeout: config.timeout || 30,
            data: json
        })
        .then(function(res) {
            if (res && res.data) {
                return res.data;
            }
            throw new ReferenceError('unexpected response without `.data`');
        })
        .catch(function(err) {
            if (!err.status) {
                logger.error('failed to execute: `' + method + ' ' + route + '`');
                logger.verbose('verbose', err);
                return;
            }
            logger.error((err.status ? (err.status + ': ') : '') + err.statusText);
        });
    }
    return Promise.resolve('missing method or route. syntax is `{crud} {endpoint}`, eg ``get db/_some_action`');
};

module.exports = function(opts, config) {
    var sugar = require('../lib/sugar.js');
    var sugarResult = sugar(opts, config);
    return sugarResult ? sugarResult : couchCmd(opts, config);
};
