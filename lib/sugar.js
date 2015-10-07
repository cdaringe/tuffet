'use strict';
module.exports = function(opts) {
    opts = opts || {};
    if (opts.deleteDatabases) {
        var url = require('url');
        var target = url.resolve(config.url, '_all_dbs');
        return axios.get(target, axiosDefaults)
        .then(function(resp) {
            var allDeleted = resp.data.map(function deleteDb(dbname) {
                return axios.delete(url.resolve(target, dbname), axiosDefaults);
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
    }
};
