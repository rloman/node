// 0 of meerdere keren

let found = false;

let a = 42;
while(a < 100 && !found) {
	console.log(a);
	if(a == 50 ) {
		found = true;
	}
	a++;
}

// a is hier 51
console.log("Hier begint de do while loop");

//1 of meerdere keren

do {
	// body
	console.log(a);
	a++;
}
while(a < 10);

