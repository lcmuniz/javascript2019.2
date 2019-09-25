const R = require("ramda");

const add1 = x => x + 1;
const val = R.map(add1, [1, 2, 3]);

console.log(val);
