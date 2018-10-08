let label = "Raymond is born on 09-08-1968 hence reached 50 years this year!";
let re = /(\d{2})-(\d{2})-(\d{4})/;

let [f, day, month, year] = re.exec(label);

let date  = new Date(year, month-1, day);

console.log(date.getFullYear());
console.log(date.getDay());

// should print your year and day to the console now! Validate it or create a test method
