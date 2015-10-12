# tuffet
The only adorable CouchDB CLI!  The [full couchdb API](http://docs.couchdb.org/en/latest/http-api.html) is supported along with some helpful extensions.

<img src="https://raw.githubusercontent.com/cdaringe/tuffet/master/tuffet.png" width="175">

# why tuffet?
You can only `curl` CouchDB so much to get things done.  `curl`ing doesn't generally offer good type-ability.  The CouchDB API, though powerful, doesn't on its own get a ton of work done for you.  Generally, you need to execute a set of composite commands to do some useful things!  `tuffet` is designed to be a typing-friendly CouchDB proxy-API with a set of extensions that you may find helpful.  You can see some examples below to sell yourself :).

# why can't I import this as a module?
Because [Pouchy](https://www.npmjs.com/package/pouchy) and plain ol' [PouchDB](https://www.npmjs.com/package/pouchdb) already exist.  They're great!

# usage

## install
`npm install -g tuffet`

## config
Running `tuffet` will put a config in `~/.tuffetrc` with some defaults.  The content should be of type `JSON`.

- url
    - Defaults to pointing to remote couchdb @ localhost:5984.

## api
Again, the [full couchdb API](http://docs.couchdb.org/en/latest/http-api.html) is loaded in.  BONUS actions can be found below.  For now, let's observe some basic commands.

```bash
$ tuffet get /
{ couchdb: 'Welcome',
  uuid: '0df364afbe336fcee34f25422da9798f',
  version: '1.6.1',
  vendor: { version: '1.6.1_3', name: 'Homebrew' } }


$ tuffet put my-new-db
{ ok: true }

$ tuffet get my-new-db
{ db_name: 'my-new-db',
  doc_count: 0,
  doc_del_count: 0,
  update_seq: 0,
  purge_seq: 0,
  compact_running: false,
  disk_size: 79,
  data_size: 0,
  instance_start_time: '1444289527569114',
  disk_format_version: 6,
  committed_update_seq: 0 }

$ tuffet post my-new-db '{"new": "doc!"}'
{ ok: true,
  id: '2fd98bdae478273f418a1d6c4f000f97',
  rev: '1-ac0f4654ecb99532dd8967dda8190ccb' }

```

## flags
- `-v/--verbose` - increase the log level (console only ATM)


## sugar api

### clear database
`--clear`
Note, the history of these docs still exists.  This _isn't_ the same as deleting the db and recreating it.  E.g. tombstones left behind!  Also, this clears design docs.  PR me to preserve them :)  Dependent Pouchy package requires an update to support it.

```bash
cdieringer@Snapper-osx:~/node/tuffet$ tuffet mydb --clear
1 'docs deleted'
```

### delete all databases
`--dd`

```bash
cdieringer@Snapper-osx:~/node/tuffet$ tuffet --dd
2 'dbs deleted'
```

# TODO
- match endpoint to formal couchdb endpoint
    - if no matching sig, test components for aliases
    - if no aliases, error
        - unless `-f/--force` supplied - exec HTTP request with params even if command not member of formal API
- write tests
- test `ANY` and binary endpoint(s)

# changelog
- 1.1.0 - add `clear`
- 1.0.0 - Migrate from `deebee`.  terribly boring name :)  You can have it if you want it. Just ask!
