'use strict';

const assert = require('assert');

const car = {
    brand: 'Ford',
    model: 'Fiesta',
    start: function () { // here this points to the car instance
        console.log(`Started	${this.brand}	${this.model}`)
    },
    stop: () => { // here this is lexically bound to the function itself (hence without scope to car instance)
        console.log(`Stopped	${this.brand}	${this.model}`)
    },

    // fails! cc is not a this property
    restart: () => {
        let cc = 1500;
        console.log(this);
        console.log(`The car has ${this.cc}	engine content`)
    }
    /*
This	implies	that	arrow	functions	are	not	suitable	to	be	used	for	object	methods	and
constructors	(arrow	function	constructors	will	actually	raise	a	 	TypeError	 	when	called).
    */
}

car.start();
car.stop();

car.restart();

//IIFE: Immediately Invocated Function Expression ...
(function() {
    console.log("Oh ... ");
})()

const square4 = (function() {
    return 4**2;
})();

assert.equal(16, square4);
console.log(square4);

// this
const squareLong = (n) => {
    return n **2;
}

// can be written as ... 
// look ma ... no open and close parenthesis and no brackets to open the body
const square = n => n**2;


assert.equal(4, square(2));