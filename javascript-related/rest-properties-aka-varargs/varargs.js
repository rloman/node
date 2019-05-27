"use strict";

function printNames(... names) {
  for(let name of names) {
    console.log(`Welcome ${name}`);
  }
}

function max(number, ...numbers) {
  let max = number;
  for (let element of numbers) {

    if (element > max) {
      max = element;
    }
  }

  return max;
}

printNames("Bert", "Klaas", "Jansen");

let biggest = max(0, 1, 1, 235, 244, 133, 55, 89);

console.log(biggest);

console.log(max());

// or
biggest = max(...[0,1,1,2,3,5]);

console.log(biggest);
