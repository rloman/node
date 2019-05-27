"use strict";

class DivideByZeroError extends Error {

}

class TooOldForThisShitError extends Error {

}

function divide(a, b) {
  if (b === 0) {
    throw new DivideByZeroError();
  }

  return a/b;
}

function printAge(age) {
  if (age > 130) {
    throw new TooOldForThisShitError();
  }

}

// main
let a = 5;
let b = 3; // dit komt vanaf de frontend

if(b !== 0) {
  divide(a,b);
}

try {
  printAge(400);
} catch (e) {
  if (e instanceof TooOldForThisShitError) {
    console.log("That was too old");

    throw e;

    return
  }

  if (e instanceof DivideByZeroError) {
    console.log("Unable to divide by zero error");

    return
  }
} finally {
  // close the DB or something (NodeJs)
  console.log("Finally finally finally ... ");

}
