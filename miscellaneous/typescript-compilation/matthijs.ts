function greeter(person) {
    return "Hello, " + person;
}

function appender() {
	return "Append";
}


let user = "Jane User";

// document.body.innerHTML = greeter(user);

console.log(greeter(user) + appender);

let testerin: Function = greeter;

testerin = testerin + appender;

console.log(testerin());

