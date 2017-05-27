const feedCat = require(process.argv[2]);
const test = require("tape");

test("feedCat throws error only for String input 'chocolate'", (t) => {
  t.throws(feedCat.bind(null, "chocolate"));
  t.deepEqual(feedCat("random string"), "yum", "feedCat should return 'yum' for strings !== 'chocolate'");
  t.end();
});
