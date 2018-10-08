var tools = require('./tools');
let assert = require('./assert');
Person = require('./class');


console.log(typeof tools.foo); // => 'function'
console.log(typeof tools.bar); // => 'function'
console.log(typeof tools.zemba); // => undefined

let piet = new Person("Piet");

assert("Piet zijn naam is niet piet", piet.name === "Piet");

console.log(piet.name);
