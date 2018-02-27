const MongoClient = require('mongodb').MongoClient;
const mongo = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'myproject';

module.exports.insertUser = function(doc, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('users');

    collection.insert( doc, function(err, doc) {
      if(err) throw err;
      callback(doc);
      client.close();
    });

  });
};

module.exports.findUsers = function(callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('users');

    collection.find().toArray(function(err, docs) {
      if(err) throw err;
      callback(docs);
      client.close();
    });
  });
};

module.exports.findUser = function(id, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('users');

    collection.findOne({ _id: new mongo.ObjectId(id) }, (function(err, doc) {
      if(err) throw err;
      callback(doc);
      client.close();
    }));
  });
};

module.exports.updateUser = function(id, doc, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('users');

    collection.update(
      { _id: new mongo.ObjectId( id) },
      doc,
      function(err, doc) {
        if(err) throw err;
        callback(doc);
        client.close();
      }
    );
  });
};

module.exports.deleteUser = function(id, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('users');

    collection.remove( { _id: new mongo.ObjectId(id) }, function(err, doc) {
        if(err) throw err;
        callback( doc);
        client.close();
    });
  });
};


