function assert(message, assertion) {
  if(!assertion) {
    throw new Error(message);
  }
}

let ray = {name: "Ray", age:50};

// part One of the exercise
console.log(ray.name); // should print ray
assert("Ray his name should be Ray", "Ray" === ray.name);

//part Two of the exercise

// create more people
let ann = {name: "Ann", age:47};
let will = {name: "Will", age: 55};

let people = [ray, ann, will];

let sum = 0;

people.forEach(p => {
  sum += Number(p.age);
})

console.log(sum);

// The assert assignment
assert("sum of dates should be 152", 152 === sum);
