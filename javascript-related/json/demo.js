let martijn = {firstName: "Martijn", age:18};

console.log(martijn.age);

// json array
let people = [
				{firstName: "Martijn", age:18, 
					address: {
						street: "Eikstraat",
						number: 17
					},
					male: true
				}, 
			  	{firstName: "Ans",     age:43, male: false}
			 ];

console.log(people[0].firstName);
console.log(people[1].age);

console.log(people[0].address);
console.log(people[0].address.street);

console.log(people[0]);

if(people[0].male) {
	console.log(`${people[0].firstName} is van geslacht mannelijk`);
}
