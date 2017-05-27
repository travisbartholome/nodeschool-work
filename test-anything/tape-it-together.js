const fancify = require(process.argv[2]);
const test = require("tape");

test("fancify returns the input string wrapped in ~*~", (t) => {
  t.deepEqual(fancify("test string"), "~*~test string~*~", "string should be wrapped in ~*~");
  t.end();
});

test("fancify second argument converts string to all caps if true", (t) => {
  t.deepEqual(fancify("test", true), "~*~TEST~*~", "second arg should cause all caps if true");
  t.deepEqual(fancify("test", false), "~*~test~*~", "second arg should not cause caps if false");
  t.end();
});

test("fancify third argument should specify character inside tildes", (t) => {
  t.deepEqual(fancify("test", false, "@"), "~@~test~@~", "third arg should specify decoration character");
  t.end();
});
