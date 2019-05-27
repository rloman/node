"use strict";

function divide(a,b) {
  if(b === 0) {
    throw new Error("Unable to divide by zero");
  }
  return a/b;
}

function showAge(age) {

  if(age > 130) {
    throw new Error("Too old to print, perhaps coding error or invalid data in DB!!!")
  }

  console.log(age);

}



// this keeps the machine running
try {
  console.log(divide(3,0));
}
catch(e) {
  console.log("U kunt helaas in dit universum niet door 0 delen");
}


showAge(129);
showAge(131);
