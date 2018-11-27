
// step 1
function doHomework(subject, callback) {

  console.log(`Starting my ${subject} homework.`);

  setTimeout(callback, 1500);
}


// step 3
function finishHomework() {
  console.log(`Finished my homework`);
}

doHomework('math', finishHomework);
doHomework('german', finishHomework);
doHomework('dutch', finishHomework);

// step 2
console.log("Done!!!");

// regular function
let x = function(n) {
  console.log(n);
}


console.log(x);

x(3);


// arrow function (because of the =>)
let y = (n) => {
  console.log(n);
}

console.log(y);

y(25);
