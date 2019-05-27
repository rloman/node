let ages = {
  Miranda: 45,
  Ray: 50,
  Julia: 45,
  "Love it":90,
  Jansen: 100
}


console.log(ages["Julia"])

// like bean style
console.log(ages.Julia);

// console.log(ages.Love it); // no

// the diff is that using Map a key name can be an invalid property name e.g. Love it =>
console.log(ages["Love it"]); // yes

// using template string
let label = `The age of 'Love it' is ${ages["Love it"]}`;

console.log(label);

let name ="Julia";
label = `The age of '${name}' is ${ages[name]}`;

let age = ages.name;

console.log(age);

console.log(label);
