var json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};

let [familyName, birthDay] = [json.name.family, json.birth.day];
// Given solution uses a different kind of destructuring,
// Which is probably more interesting.

console.log(familyName);
console.log(birthDay);
