const assert = require("assert");
const isCoolNumber = require(process.argv[2]);
assert(isCoolNumber(42), "isCoolNumber(42) should return true");
