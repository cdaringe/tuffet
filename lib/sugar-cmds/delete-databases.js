'use strict';
module.exports = function(opts, config) {
    var url = require('url');
    var axios = require('axios');
    var target = url.resolve(config.url, '_all_dbs');
    return axios.get(target, config.httpDefaults)
    .then(function(resp) {
        var allDeleted = resp.data.map(function deleteDb(dbname) {
            return axios.delete(url.resolve(target, dbname), config.httpDefaults);
        });
        return Promise.all(allDeleted);
    })
    .then(function(allDeletedMeta) {
        console.log(allDeletedMeta.length, 'dbs deleted');
    })
    .catch(function(err) {
        console.error(err.message || 'fatal delete dbs error');
        console.dir(err.stack);
    });
};
