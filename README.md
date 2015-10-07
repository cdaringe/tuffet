# tuffet
CLI interface to a remote CouchDB!  The [full couchdb API](http://docs.couchdb.org/en/latest/http-api.html) is supported.

![tuffet](tuffet.png)

# why tuffet?
You can only `curl` so much to get things done.  `curl`ing doesn't generally offer good type-ability.  The CouchDB API, though powerful, doesn't on its own get a ton of work done for you.  Generally, you need to execute a set of composite commands to do some useful things!  `tuffet` is designed to be a typing-friendly CouchDB proxy-API with a set of extensions that you may find helpful.  You can see some examples below to sell yourself :).

# why can't I import this as a module?
Because [Pouchy][https://www.npmjs.com/package/pouchy] and plain ol' [PouchDB](https://www.npmjs.com/package/pouchdb) already exist.  They're great!  This CLI doesn't use them under the hood in order to stay true to stay simple and true to the simple CouchDB HTTP experience.

# usage
## config
Running `tuffet` will put a config in `~/.tuffetrc` with some defaults.  The content should be of type `JSON`.

- url
    - Defaults to pointing to remote couchdb @ localhost:5984.

## api
Again, the [full couchdb API](http://docs.couchdb.org/en/latest/http-api.html) is loaded in.  BONUS actions can be found below.  For now, let's observe some basic commands.

```
tuffet get mydb //=> { "myDb": { ... }}
tuffet get mydb/my-doc { ... }
```

## flags
- `-v/--verbose` - increase the log level (console only ATM)

@TODO
- `-f/--force` - exec HTTP request with params even if command not member of formal API

## sugar api

### deleteDatabases
`--dd`

```bash
cdieringer@Snapper-osx:~/node/tuffet$ tuffet --dd
2 'dbs deleted'
```

# TODO
- detect how many args couch endpoint wants
    - if 1 and alias, match!
    - if n and matching signature (url/like/this === url like this, args wise)
        - if no matching sig, test components for aliases

# changelog
- 1.0.0 - Migrate from `deebee`.  terribly boring name :)  You can have it if you want it. Just ask!
