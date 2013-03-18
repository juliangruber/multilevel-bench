var str = {
  large : '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
  medium : '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
  small : '12345678901234567890'
}

suite('MemDOWN', function () {
  set('type', 'static');
  set('iterations', 1000);

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

suite('Redis', function () {
  set('type', 'static');
  set('iterations', 10000);

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

suite('MongoDB', function () {
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
  bench('set small', function (done) { collection.insert({ id:i++, str:str.small }, done) });
  bench('set medium', function (done) { collection.insert({ id:i++, str:str.medium }, done) });
  bench('set large', function (done) { collection.insert({ id:i++, str:str.large }, done) });
  bench('get large', function (done) { collection.findOne({ id:--i }, done) });
  bench('get medium', function (done) { collection.findOne({ id:--i }, done) });
  bench('get small', function (done) { collection.findOne({ id:--i }, done) });
});

suite('Memcached', function () {
  set('type', 'static');
  set('iterations', 10000);

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

suite('levelUP', function () {
  set('type', 'static');
  set('iterations', 10000);

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

suite('levelDOWN', function () {
  set('type', 'static');
  set('iterations', 10000);

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

suite('leveled', function () {
  set('type', 'static');
  set('iterations', 10000);

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

suite('multilevel', function () {
  set('type', 'static');
  set('iterations', 10000);

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

suite('multilevel (fake network)', function () {
  set('type', 'static');
  set('iterations', 10000);

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

suite('multileveled', function () {
  set('type', 'static');
  set('iterations', 10000);

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

suite('multileveled (fake network)', function () {
  set('type', 'static');
  set('iterations', 10000);

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

suite('multilevel-http', function () {
  set('type', 'static');
  set('iterations', 10000);

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

suite('Memory', function () {
  set('type', 'static');
  set('iterations', 10000);

  var db = {};

  var i = 0;
  bench('set small', function () { db[i++] = str.small });
  bench('set medium', function () { db[i++] = str.medium });
  bench('set large', function () { db[i++] = str.large });
  bench('get small', function () { db[--i]+'' });
  bench('get medium', function () { db[--i]+'' });
  bench('get large', function () { db[--i]+'' });
})
;
