'use strict';
module.exports = function(opts) {
    if (!opts || !opts.root) {
        throw new TypeError('promise-uncaught-polyfill requires `opts` object with at least a `root` prop');
    }
    var root = opts.root;

    root.Promise = require('bluebird');
    root.Promise.longStackTraces();

    /**
     * @package promise-uncaught-polyfill
     * This package is used in both the rendering AND main process to detect
     * uncaught promises
     * @param  {error}
     * @return {undefined}
     */
    Promise.onPossiblyUnhandledRejection(function handleCaughtPromise(error) {
        error = error || {};

        /**
         * If the provided handler provides a match() fn that returns truthy
         * when passed the error, the handler will assume responsibility for handling
         * the error and be called with it.  Otherwise, other handlers (including the default)
         * will be given chance to handle the error.
         * @param  {function} handler error handler function.  expected to have a `match` fn to test
         *                            if it can handle the error or not.
         * @return {boolean} true if a handler has matched the error and responsiblity delegated
         */
        var handleOnMatch = function(handler) {
            if (handler && handler.match(error)) {
                handler(error);
                return true;
            }
        }

        if (opts && opts.handlers && opts.handlers.some(handleOnMatch)) {
            return; // handler matched
        }

        var msg = 'unhandled error occurred: ' + error.message;
        console.error(error.message, 'trace:');
        console.log(error.stack);
        throw error;
    });

    return Promise.resolve();
};
