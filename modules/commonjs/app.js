// import module tools for foo and bar method
var tools = require('./tools');

// import assert function
let assert = require('./assert');

// import class Person
let Person = require('./class');

// import variable(s)
const constants = require('./constants.js');

// print some to validate below
console.log(constants.seasons);
console.log(constants.seasons[1]);
console.log(`Hans his preferred roomtype is ${constants.roomTypes[1].name}`)
console.log(`Hans his preferred roomtype is ${constants.roomType.normal.name}`)
console.log(typeof tools.foo); // => 'function'
console.log(typeof tools.bar); // => 'function'
console.log(typeof tools.zemba); // => undefined

let piet = new Person("Piet");

// use the imported (required) assert method
assert("Piet zijn naam is niet piet", piet.name === "Piet");
console.log(piet.name);
