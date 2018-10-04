"use strict";


function divide(a,b) {
  if(b === 0) {
    throw new Error("Unable to divide by zero");
  }
  return a/b;
}

try {
  console.log(divide(3,0));
}
catch(e) {
  console.log("caucht")
}
