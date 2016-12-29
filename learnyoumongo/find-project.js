const mongo = require('mongodb').MongoClient;
const DB_URL = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(DB_URL, function(err, db) {
  if (err) throw err;
  db.collection('parrots').find({
    age: {
      $gt: +process.argv[2]
    }
  }, {
    name: 1,
    age: 1,
    _id: 0
  }).toArray(function(err, documents) {
    if (err) throw err;
    console.log(documents);
    db.close();
  });
});
