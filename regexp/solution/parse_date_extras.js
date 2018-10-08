function assert(message, assertion) {
  if(!assertion) {
    console.error(message);
    throw new Error(message);
  }
}

let label = "Raymond is born on 09-08-1968 hence reached 50 years this year!";
let re = /(\d{2})-(\d{2})-(\d{4})/;
if(!re.test(label)) {
  throw new Error();
}
let [f, day, month, year] = re.exec(label);

console.log(day);
console.log(month);
console.log(year);

assert("day should be 9 here", day == 9);

let date  = new Date(year, month-1, day);

console.log(date.getFullYear());
console.log(date.getDay());
