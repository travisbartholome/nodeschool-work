let arg1 = process.argv[2];
let arg2 = process.argv[3];

import _MATH_EXPORT from "./export-default-math";
console.log(_MATH_EXPORT.PI);
console.log(_MATH_EXPORT.sqrt(+arg1));
console.log(_MATH_EXPORT.square(+arg2));
