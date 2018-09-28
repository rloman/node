'use strict';

class Bottle {

	constructor(name, size) {
		this._name = name;
		this._size = size;
	}

	get name() {
		return this._name; // be aware of the underscore here :-) else StackOverflow
	}

	set name(value) {
		this._name = value;
	}

	get size() {
		return this._size;
	}
}

let grolsch = new Bottle("Grolsch", 33);
let heineken = new Bottle("Heineken", 30);
let amstel = new Bottle("Amstel", 25);

console.log(grolsch.name);
console.log(heineken.name);
console.log(amstel.name);

console.log(grolsch.size);
grolsch.poedel = "Poedel";
console.log(grolsch.size);
console.log(grolsch.poedel);

grolsch.name = "Jupiler";

console.log(grolsch.name);

// grolsch.size = 33;

grolsch.jansen = 15;
