var str = {
  large : '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
  medium : '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
  small : '12345678901234567890'
}

suite('Redis (100.000x)', function () {
  set('type', 'static');
  set('iterations', 100000);

  var redis = require('redis');
  var client = redis.createClient();
  client.flushall();

  var i = 0;
  bench('set small', function (done) { client.set(i++, str.small, done) });
  bench('set medium', function (done) { client.set(i++, str.medium, done) });
  bench('set large', function (done) { client.set(i++, str.large, done) });
  bench('get large', function (done) { client.get(--i, done) });
  bench('get medium', function (done) { client.get(--i, done) });
  bench('get small', function (done) { client.get(--i, done) });
});

suite('MongoDB (1.000x)', function () {
  set('type', 'static');
  set('iterations', 1000);

  var Db = require('mongodb').Db;
  var Connection = require('mongodb').Connection;
  var Server = require('mongodb').Server;
  var collection;

  Db.connect('mongodb://localhost/test', function (err, db) {
    if (err) throw err;
    db.dropDatabase(function (err) {
      if (err) throw err;
      db.collection('test', function (err, _collection) {
        if (err) throw err;
        _collection.ensureIndex({id:1}, function (err) {
          if (err) throw err;
          collection = _collection;
        });
      })
    })
  })

  var i = 0;
  bench('set small', function (done) { collection.insert({ _id: i++, str: str.small }, done) });
  bench('set medium', function (done) { collection.insert({ _id: i++, str: str.medium }, done) });
  bench('set large', function (done) { collection.insert({ _id: i++, str: str.large }, done) });
  bench('get large', function (done) { collection.findOne({ _id: --i }, done) });
  bench('get medium', function (done) { collection.findOne({ _id: --i }, done) });
  bench('get small', function (done) { collection.findOne({ _id: --i }, done) });
});

suite('Memcached (100.000x)', function () {
  set('type', 'static');
  set('iterations', 100000);

  var Memcached = require('memcached');
  var client = new Memcached('localhost:11211');

  var i = 0;
  bench('set small', function (done) { client.set(''+i++, str.small, 1000, done) });
  bench('set medium', function (done) { client.set(''+i++, str.medium, 1000, done) });
  bench('set large', function (done) { client.set(''+i++, str.large, 1000, done) });
  bench('get large', function (done) { client.get(--i+'', done) });
  bench('get medium', function (done) { client.get(--i+'', done) });
  bench('get small', function (done) { client.get(--i+'', done) });
});

suite('Medea (100.000x)', function () {
  set('type', 'static');
  set('iterations', 100000);

  var Medea = require('medea');
  var medea = new Medea();
  var rimraf = require('rimraf');

  rimraf.sync(__dirname + '/medea');
  medea.open(__dirname + '/medea', function (err) {
    if (err) throw err;
  })

  var i = 0;
  bench('set small', function (done) { medea.put(''+i++, str.small, done) });
  bench('set medium', function (done) { medea.put(''+i++, str.medium, done) });
  bench('set large', function (done) { medea.put(''+i++, str.large, done) });
  bench('get large', function (done) { medea.get(--i+'', done) });
  bench('get medium', function (done) { medea.get(--i+'', done) });
  bench('get small', function (done) { medea.get(--i+'', done) });
});

suite('levelUP (100.000x)', function () {
  set('type', 'static');
  set('iterations', 100000);

  var levelup = require('levelup');
  var rimraf = require('rimraf');

  rimraf.sync(__dirname + '/levelup');
  var db = levelup(__dirname + '/levelup');

  var i = 0;
  bench('set small', function (done) { db.put(i++, str.small, done) });
  bench('set medium', function (done) { db.put(i++, str.medium, done) });
  bench('set large', function (done) { db.put(i++, str.large, done) });
  bench('get large', function (done) { db.get(--i, done) });
  bench('get medium', function (done) { db.get(--i, done) });
  bench('get small', function (done) { db.get(--i, done) });
});

suite('levelDOWN (100.000x)', function () {
  set('type', 'static');
  set('iterations', 100000);

  var leveldown = require('leveldown');
  var rimraf = require('rimraf');

  rimraf.sync(__dirname + '/leveldown');
  var db = leveldown(__dirname + '/leveldown');
  db.open(function (err) {
    if (err) throw err;
  });

  var i = 0;
  bench('set small', function (done) { db.put(i++, str.small, done) });
  bench('set medium', function (done) { db.put(i++, str.medium, done) });
  bench('set large', function (done) { db.put(i++, str.large, done) });
  bench('get large', function (done) { db.get(--i, done) });
  bench('get medium', function (done) { db.get(--i, done) });
  bench('get small', function (done) { db.get(--i, done) });
});

suite('leveled (100.000x)', function () {
  set('type', 'static');
  set('iterations', 100000);

  var leveled = require('leveled');
  var rimraf = require('rimraf');

  rimraf.sync(__dirname + '/leveled');
  var db = leveled(__dirname + '/leveled');

  var i = 0;
  bench('set small', function (done) { db.put(i++, str.small, done) });
  bench('set medium', function (done) { db.put(i++, str.medium, done) });
  bench('set large', function (done) { db.put(i++, str.large, done) });
  bench('get large', function (done) { db.get(--i, done) });
  bench('get medium', function (done) { db.get(--i, done) });
  bench('get small', function (done) { db.get(--i, done) });
});

suite('multilevel (100.000x)', function () {
  set('type', 'static');
  set('iterations', 100000);

  var net = require('net');
  var multilevel = require('multilevel');
  var levelup = require('levelup');
  var rimraf = require('rimraf');

  rimraf.sync(__dirname + '/multilevel');
  var _db = levelup(__dirname + '/multilevel');
  
  net.createServer(function (c) {
    c.pipe(multilevel.server(_db)).pipe(c);
  }).listen(8005);

  var db = multilevel.client();
  db.pipe(net.connect(8005)).pipe(db);

  var i = 0;
  bench('set small', function (done) { db.put(i++, str.small, done) });
  bench('set medium', function (done) { db.put(i++, str.medium, done) });
  bench('set large', function (done) { db.put(i++, str.large, done) });
  bench('get large', function (done) { db.get(--i, done) });
  bench('get medium', function (done) { db.get(--i, done) });
  bench('get small', function (done) { db.get(--i, done) });
});

suite('multilevel (fake network, 100.000x)', function () {
  set('type', 'static');
  set('iterations', 100000);

  var multilevel = require('multilevel');
  var levelup = require('levelup');
  var rimraf = require('rimraf');

  rimraf.sync(__dirname + '/multilevel-fake');

  var db = multilevel.client();
  db.pipe(multilevel.server(levelup(__dirname + '/multilevel-fake'))).pipe(db);

  var i = 0;
  bench('set small', function (done) { db.put(i++, str.small, done) });
  bench('set medium', function (done) { db.put(i++, str.medium, done) });
  bench('set large', function (done) { db.put(i++, str.large, done) });
  bench('get large', function (done) { db.get(--i, done) });
  bench('get medium', function (done) { db.get(--i, done) });
  bench('get small', function (done) { db.get(--i, done) });
});

suite('multileveled (100.000x)', function () {
  set('type', 'static');
  set('iterations', 100000);

  var net = require('net');
  var multileveled = require('multileveled');
  var leveled = require('leveled');
  var rimraf = require('rimraf');

  rimraf.sync(__dirname + '/multileveled');
  var _db = leveled(__dirname + '/multileveled');
  
  net.createServer(function (c) {
    c.pipe(multileveled.server(_db)).pipe(c);
  }).listen(8007);

  var db = multileveled.client();
  db.pipe(net.connect(8007)).pipe(db);

  var i = 0;
  bench('set small', function (done) { db.put(i++, str.small, done) });
  bench('set medium', function (done) { db.put(i++, str.medium, done) });
  bench('set large', function (done) { db.put(i++, str.large, done) });
  bench('get large', function (done) { db.get(--i, done) });
  bench('get medium', function (done) { db.get(--i, done) });
  bench('get small', function (done) { db.get(--i, done) });
});

suite('multileveled (fake network, 100.000x)', function () {
  set('type', 'static');
  set('iterations', 100000);

  var multileveled = require('multileveled');
  var leveled = require('leveled');
  var rimraf = require('rimraf');

  rimraf.sync(__dirname + '/multileveled-fake');

  var db = multileveled.client();
  db.pipe(multileveled.server(leveled(__dirname + '/multileveled-fake'))).pipe(db);

  var i = 0;
  bench('set small', function (done) { db.put(i++, str.small, done) });
  bench('set medium', function (done) { db.put(i++, str.medium, done) });
  bench('set large', function (done) { db.put(i++, str.large, done) });
  bench('get large', function (done) { db.get(--i, done) });
  bench('get medium', function (done) { db.get(--i, done) });
  bench('get small', function (done) { db.get(--i, done) });
});

suite('multilevel-http (1.000x)', function () {
  set('type', 'static');
  set('iterations', 1000);

  var multilevel = require('multilevel-http');
  var levelup = require('levelup');
  var rimraf = require('rimraf');

  rimraf.sync(__dirname + '/multilevel-http');
  multilevel.server(levelup(__dirname + '/multilevel-http')).listen(8006);
  var db = multilevel.client('http://localhost:8006');

  var i = 0;
  bench('set small', function (done) { db.put(i++, str.small, done) });
  bench('set medium', function (done) { db.put(i++, str.medium, done) });
  bench('set large', function (done) { db.put(i++, str.large, done) });
  bench('get large', function (done) { db.get(--i, done) });
  bench('get medium', function (done) { db.get(--i, done) });
  bench('get small', function (done) { db.get(--i, done) });
});

suite('MemDOWN (10.000x)', function () {
  set('type', 'static');
  set('iterations', 10000);

  var levelup = require('levelup');
  var MemDOWN = require('memdown');
  var factory = function (loc) { return new MemDOWN(loc) }
  var rimraf = require('rimraf');

  rimraf.sync(__dirname + '/levelup');
  var db = levelup(__dirname + '/levelup', { db : factory });

  var i = 0;
  bench('set small', function (done) { db.put(i++, str.small, done) });
  bench('set medium', function (done) { db.put(i++, str.medium, done) });
  bench('set large', function (done) { db.put(i++, str.large, done) });
  bench('get large', function (done) { db.get(--i, done) });
  bench('get medium', function (done) { db.get(--i, done) });
  bench('get small', function (done) { db.get(--i, done) });
});

suite('Memory (100.000x)', function () {
  set('type', 'static');
  set('iterations', 100000);

  var db = {};

  var i = 0;
  bench('set small', function () { db[i++] = str.small });
  bench('set medium', function () { db[i++] = str.medium });
  bench('set large', function () { db[i++] = str.large });
  bench('get small', function () { db[--i]+'' });
  bench('get medium', function () { db[--i]+'' });
  bench('get large', function () { db[--i]+'' });
});

suite('TingoDB (10.000x)', function () {
  set('type', 'static');
  set('iterations', 10000);

  var temp = require('temp');
  var Db = require('tingodb')({}).Db;
  var collection;

  var db = new Db(temp.mkdirSync("tingodb"), {});

  db.collection('test', function (err, _collection) {
    if (err) throw err;
	  collection = _collection;
  });

  var i = 0;
  bench('set small', function (done) { collection.insert({ _id: i++, str: str.small }, done) });
  bench('set medium', function (done) { collection.insert({ _id: i++, str: str.medium }, done) });
  bench('set large', function (done) { collection.insert({ _id: i++, str: str.large }, done) });
  bench('get large', function (done) { collection.findOne({ _id: --i }, done) });
  bench('get medium', function (done) { collection.findOne({ _id: --i }, done) });
  bench('get small', function (done) { collection.findOne({ _id: --i }, done) });
});
