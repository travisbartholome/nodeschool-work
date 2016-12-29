const mongo = require('mongodb').MongoClient;

const DB_URL = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(DB_URL, function(err, db) {
  if (err) throw err;
  db.collection('prices').aggregate([
    { $match: { size: process.argv[2] } },
    { $group: {
      _id: "average",
      averagePrice: {
        $avg: "$price"
      }
    }}
  ]).toArray(function(err, results) {
    if (err) throw err;
    if (!results.length) {
      throw new Error('No results found'); // From given solution after completion.
    }
    let averagePrice = Number(results[0].averagePrice);
    console.log(averagePrice.toFixed(2));
    db.close();
  });
});
