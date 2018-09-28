let regexp = /^\d+$/;

console.log(regexp.test("12"));
console.log(regexp.test("12a"));

let emailAddressPattern = /^[a-z]+@[a-z]+\.com|nl|us|co\.uk$/;

console.log(emailAddressPattern.test("raymond@carpago.nl"));
console.log(emailAddressPattern.test("raymond@carpago.com"));
console.log(emailAddressPattern.test("raymond@carpago.us"));
console.log(emailAddressPattern.test("raymond@carpago.co.uk"));
