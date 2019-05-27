let numbers = [0,1,1,2,3,5,8,13,21,34,55,89,144,233];

for(let number of numbers) {
	console.log(number);
}

// other nice example
for(let index = 0;index<numbers.length;index++) {
	if(index > 0) {
		console.log(numbers[index]/numbers[index-1]);
	}
}

console.log("The gulden ratio: "+(1+Math.sqrt(5))/2);

console.log("What do you see?");

// another example of a loop
numbers.forEach(n => {
	console.log(n);
});



numbers = Array.of(0,1,1,2,3,5,8,13,21,34,55,89)

// iteratores until function returns false
numbers.every(n => {
	console.log(n)
	if(n ===  89) {
		return false;
	}
	else {
		return true;
	}
});

// iterates untilfunction returns true;
numbers.some(n => {
	console.log(n);
});