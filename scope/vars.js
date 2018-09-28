// "use strict";


function foo() {

	var z = 45;

	{
		let y = 50;

		y++;
		console.log(y === 51);

	}

	{
		let y = 60
		y++
		console.log(y === 61)
	}
	// console.log(y); // undefined
	console.log(z);
}

let bar = (foo2) =>  {
	foo2();
}

bar = (foo3) => {
	console.log(foo3);
}

foo();

console.log(foo);
bar(foo);

bar("Andries");


