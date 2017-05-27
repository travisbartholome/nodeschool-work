const repeatCallback = require(process.argv[2]);
const test = require("tape");

test("repeatCallback calls a function n times", (t) => {
  let n = 6;
  t.plan(n);
  repeatCallback(n, function() {
    t.pass("callback called");
  });
});
