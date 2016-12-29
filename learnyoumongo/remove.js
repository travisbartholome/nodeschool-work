const mongo = require('mongodb').MongoClient;
const DB_URL = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(DB_URL, function(err, db) {
  if (err) throw err;
  db.collection(process.argv[3]).remove({
    _id: process.argv[4]
  }, function(err, data) {
    if (err) throw err;
    db.close();
  });
});
