const mongo = require('mongodb').MongoClient;
const DB_URL = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(DB_URL, function(err, db) {
  if (err) return console.error(err);
  db.collection('parrots').find({
    age: {
      $gt: parseInt(process.argv[2])
    }
  }).toArray(function(err, documents) {
    if (err) return console.error(err);
    console.log(documents);
    db.close();
  });
})
