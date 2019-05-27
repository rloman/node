"use strict";

const person = Object.freeze({name: "Ray"});

let lijst = Object.freeze([1,2,3]);

lijst[0] = 3;

// person.name = "Mond";

// person.lastName = "Loman";

console.log(person.name);

// person = {name: "Rob"}; // nu vout

const person2 = {lastName: "Doe"};

person2.lastName = "Jane";

// person2 = {lastName: "Doodle"};
