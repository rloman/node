// in this sourcecode, the ... is what YOU have to program in

// create a label with your birthdate in it
let label = "Raymond is born on 09-08-1968 hence reached 50 years this year!";

// this RegExp is what you have to make for yourself
let re = ...


let [_, day, month, year] = re.exec(label);

let date  = new Date(year, month-1, day);

// print some to test
console.log(date.getFullYear());
console.log(date.getDay());
