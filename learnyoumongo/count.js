const mongo = require('mongodb').MongoClient;

const DB_URL = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(DB_URL, function(err, db) {
  if (err) throw err;
  db.collection('parrots').count({
    age: {
      $gt: +process.argv[2]
    }
  }, function(err, count) {
    if (err) throw err;
    console.log(count);
    db.close();
  });
});
