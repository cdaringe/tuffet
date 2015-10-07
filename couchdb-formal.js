// http://docs.couchdb.org/en/latest/http-api.html
// aliases added for sugar API
var ANY = 'GET'; // @TODO asses ramification of proxying these to GETs
var GET = 'GET';
var PUT = 'PUT';
var DELETE = 'DELETE';
var POST = 'POST';
var HEAD = 'HEAD';
var COPY = 'COPY'; // @TODO supported?
module.exports = [{
    method: GET,
    route: '/_active_tasks',
    description: 'Obtains a list of the tasks running in the server',
    aliases: ['active'],
    needsDb: false,
},
{
    method: GET,
    route: '/_all_dbs',
    description: 'Returns a list of all the databases',
    aliases: ['all', 'alldbs', '_all_dbs', 'a'],
    needsDb: false,
},
{
    method: GET,
    route: '/_config',
    description: 'Obtains a list of the entire server configuration',
    aliases: ['config', 'conf', 'c'],
    needsDb: false,
},
{
    method: GET,
    route: '/_config/{section}',
    description: 'Returns all the configuration values for the specified section',
},
{
    method: GET,
    route: '/_config/{section}/{key}',
    description: 'Returns a specific section/configuration value',
},
{
    method: PUT,
    route: '/_config/{section}/{key}',
    description: 'Sets the specified configuration value',
},
{
    method: DELETE,
    route: '/_config/{section}/{key}',
    description: 'Removes the current setting',
},
{
    method: GET,
    route: '/_db_updates',
    description: 'Return the server changes of databases',
    aliases: ['dbu', 'updates'],
    needsDb: false,
},
{
    method: GET,
    route: '/_log',
    description: 'Returns the server log file',
    aliases: ['log'],
    needsDb: false,
},
{
    method: GET,
    route: '/_membership',
    description: 'Returns a list of nodes',
    aliases: ['membership', 'memb'],
    needsDb: false,
},
{
    method: POST,
    route: '/_replicate',
    description: 'Starts or cancels the replication',
    aliases: ['replicate', 'rep'],
    needsDb: false,
},
{
    method: POST,
    route: '/_restart',
    description: 'Restarts the server',
    aliases: ['restart', 'r'],
    needsDb: false,
},
{
    method: GET,
    route: '/_session',
    description: 'Returns Cookie-based login user information',
},
{
    method: POST,
    route: '/_session',
    description: 'Authenticates user by Cookie-based user login',
},
{
    method: DELETE,
    route: '/_session',
    description: 'Logout Cookie-based user',
},
{
    method: GET,
    route: '/_stats',
    description: 'Returns server statistics',
    aliases: ['stats'],
    needsDb: false,
},
{
    method: GET,
    route: '/_utils',
    description: 'Redirects to /_utils/',
},
{
    method: GET,
    route: '/_utils/',
    description: 'CouchDB administration interface (Futon)',
},
{
    method: GET,
    route: '/_uuids',
    description: 'Generates a list of UUIDs from the server',
    aliases: ['uuid', 'uuids'],
    needsDb: false,
},
{
    method: GET,
    route: '/favicon.ico',
    description: 'Returns the site icon',
},
{
    method: HEAD,
    route: '/{db}',
    description: 'Checks the database existence',
},
{
    method: GET,
    route: '/{db}',
    description: 'Returns the database information',
},
{
    method: POST,
    route: '/{db}',
    description: 'Creates a new document with generated ID if _id is not specified',
},
{
    method: PUT,
    route: '/{db}',
    description: 'Creates a new database',
},
{
    method: DELETE,
    route: '/{db}',
    description: 'Deletes an existing database',
},
{
    method: GET,
    route: '/{db}/_all_docs',
    description: 'Returns a built-in view of all documents in this database',
},
{
    method: POST,
    route: '/{db}/_all_docs',
    description: 'Returns certain rows from the built-in view of all documents',
},
{
    method: POST,
    route: '/{db}/_bulk_docs',
    description: 'Inserts or updates multiple documents in to the database in a single request',
},
{
    method: GET,
    route: '/{db}/_changes',
    description: 'Returns changes for the given database',
},
{
    method: POST,
    route: '/{db}/_changes',
    description: 'Returns changes for the given database for certain document IDs',
},
{
    method: POST,
    route: '/{db}/_compact',
    description: 'Starts a compaction for the database',
},
{
    method: POST,
    route: '/{db}/_compact/{ddoc}',
    description: 'Starts a compaction for all the views in the selected design document',
},
{
    method: HEAD,
    route: '/{db}/_design/{ddoc}',
    description: 'Returns bare information in the HTTP Headers for the design document',
},
{
    method: GET,
    route: '/{db}/_design/{ddoc}',
    description: 'Returns the design document',
},
{
    method: PUT,
    route: '/{db}/_design/{ddoc}',
    description: 'Creates a new design document or new version of an existing one',
},
{
    method: DELETE,
    route: '/{db}/_design/{ddoc}',
    description: 'Deletes the design document',
},
{
    method: COPY,
    route: '/{db}/_design/{ddoc}',
    description: 'Copies the design document',
},
{
    method: GET,
    route: '/{db}/_design/{ddoc}/_info',
    description: 'Returns view index information for the specified design document',
},
{
    method: GET,
    route: '/{db}/_design/{ddoc}/_list/{func}/{other-ddoc}/{view}',
    description: 'Executes a list function against the view from other design document',
},
{
    method: POST,
    route: '/{db}/_design/{ddoc}/_list/{func}/{other-ddoc}/{view}',
    description: 'Same as GET method for the related endpoint',
},
{
    method: GET,
    route: '/{db}/_design/{ddoc}/_list/{func}/{view}',
    description: 'Executes a list function against the view from the same design document',
},
{
    method: POST,
    route: '/{db}/_design/{ddoc}/_list/{func}/{view}',
    description: 'Same as GET method for the related endpoint',
},
{
    method: ANY,
    route: '/{db}/_design/{ddoc}/_rewrite/{path}',
    description: 'Rewrites HTTP request for the specified path by using stored routing rules',
},
{
    method: GET,
    route: '/{db}/_design/{ddoc}/_show/{func}',
    description: 'Executes a show function against null document',
},
{
    method: POST,
    route: '/{db}/_design/{ddoc}/_show/{func}',
    description: 'Same as GET method for the related endpoint',
},
{
    method: GET,
    route: '/{db}/_design/{ddoc}/_show/{func}/{docid}',
    description: 'Executes a show function against the specified document',
},
{
    method: POST,
    route: '/{db}/_design/{ddoc}/_show/{func}/{docid}',
    description: 'Same as GET method for the related endpoint',
},
{
    method: POST,
    route: '/{db}/_design/{ddoc}/_update/{func}',
    description: 'Executes an update function against the null document',
},
{
    method: PUT,
    route: '/{db}/_design/{ddoc}/_update/{func}/{docid}',
    description: 'Executes an update function against the specified document',
},
{
    method: GET,
    route: '/{db}/_design/{ddoc}/_view/{view}',
    description: 'Returns results for the specified stored view',
},
{
    method: POST,
    route: '/{db}/_design/{ddoc}/_view/{view}',
    description: 'Returns certain rows for the specified stored view',
},
{
    method: HEAD,
    route: '/{db}/_design/{ddoc}/{attname}',
    description: 'Returns bare information in the HTTP Headers for the attachment',
},
{
    method: GET,
    route: '/{db}/_design/{ddoc}/{attname}',
    description: 'Gets the attachment of a design document',
},
{
    method: PUT,
    route: '/{db}/_design/{ddoc}/{attname}',
    description: 'Adds an attachment of a design document',
},
{
    method: DELETE,
    route: '/{db}/_design/{ddoc}/{attname}',
    description: 'Deletes an attachment of a design document',
},
{
    method: POST,
    route: '/{db}/_ensure_full_commit',
    description: 'Makes sure all uncommitted changes are written and synchronized to the disk',
},
{
    method: GET,
    route: '/{db}/_local/{docid}',
    description: 'Returns the latest revision of the local document',
},
{
    method: PUT,
    route: '/{db}/_local/{docid}',
    description: 'Inserts a new version of the local document',
},
{
    method: DELETE,
    route: '/{db}/_local/{docid}',
    description: 'Deletes the local document',
},
{
    method: COPY,
    route: '/{db}/_local/{docid}',
    description: 'Copies the local document within the same database',
},
{
    method: POST,
    route: '/{db}/_missing_revs',
    description: 'By given list of document revisions returns the document revisions that do not exist in the database',
},
{
    method: POST,
    route: '/{db}/_purge',
    description: 'Purges some historical documents entirely from database history',
},
{
    method: POST,
    route: '/{db}/_revs_diff',
    description: 'By given list of document revisions returns differences between the given revisions and ones that are in the database',
},
{
    method: GET,
    route: '/{db}/_revs_limit',
    description: 'Returns the limit of historical revisions to store for a single document in the database',
},
{
    method: PUT,
    route: '/{db}/_revs_limit',
    description: 'Sets the limit of historical revisions to store for a single document in the database',
},
{
    method: GET,
    route: '/{db}/_security',
    description: 'Returns the special security object for the database',
},
{
    method: PUT,
    route: '/{db}/_security',
    description: 'Sets the special security object for the database',
},
{
    method: POST,
    route: '/{db}/_temp_view',
    description: 'Executes a given view function for all documents and returns the result',
},
{
    method: POST,
    route: '/{db}/_view_cleanup',
    description: 'Removes view files that are not used by any design document',
},
{
    method: HEAD,
    route: '/{db}/{docid}',
    description: 'Returns bare information in the HTTP Headers for the document',
},
{
    method: GET,
    route: '/{db}/{docid}',
    description: 'Returns the document',
},
{
    method: PUT,
    route: '/{db}/{docid}',
    description: 'Creates a new document or new version of an existing document',
},
{
    method: DELETE,
    route: '/{db}/{docid}',
    description: 'Deletes the document',
},
{
    method: COPY,
    route: '/{db}/{docid}',
    description: 'Copies the document within the same database',
},
{
    method: HEAD,
    route: '/{db}/{docid}/{attname}',
    description: 'Returns bare information in the HTTP Headers for the attachment',
},
{
    method: GET,
    route: '/{db}/{docid}/{attname}',
    description: 'Gets the attachment of a document',
},
{
    method: PUT,
    route: '/{db}/{docid}/{attname}',
    description: 'Adds an attachment of a document',
},
{
    method: DELETE,
    route: '/{db}/{docid}/{attname}',
    description: 'Deletes an attachment of a document',
}];
