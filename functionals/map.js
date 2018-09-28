'use strict';

function map(array, transformer) {
  let result = [];
  for(let element of array){
    result.push(transformer(element));
  }

  return result;
}

let people = [{name: "Ray", age:50}, {name: "Anne", age:47}, {name: "Lieke", age:15}, {name: "Wout", age:13}];

console.log(map(people, person => person.name));

console.log(map(people, person => 50 - person.age));
