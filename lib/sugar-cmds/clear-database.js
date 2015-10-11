'use strict';
module.exports = function(opts, config) {
    var url = require('url');
    var Pouchy = require('pouchy');
    var db = opts._[0];
    if (!db) {
        throw new ReferenceError('no db provided')
    }
    var pouch = new Pouchy({ url: url.resolve(config.url, db), changes: false });
    return pouch.clear().then(function(deleted) {
        console.log(deleted.length, 'docs deleted');
    }).catch(function(err) {
        console.error(err.message || 'fatal clear db `' + db + '` error');
        console.dir(err.stack);
    });
};
