const mongo = require('mongodb').MongoClient;
const DB_URL = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(DB_URL, function(err, db) {
  if (err) throw err;
  let entry = {
    firstName: process.argv[2],
    lastName: process.argv[3]
  };
  db.collection('docs').insert(entry, function(err, data) {
    if (err) throw err;
    console.log(JSON.stringify(entry));
    db.close();
  });
});
