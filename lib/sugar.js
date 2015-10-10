'use strict';
module.exports = function(opts, config) {
    var cmd = function(file) {
        return require('./sugar-cmds/' + file + '.js')(opts, config);
    };
    opts = opts || {};
    if (opts.deleteDatabases) {
        return cmd('delete-databases');
    }
    if (opts.clear) {
        return cmd('clear-database');
    }
};
