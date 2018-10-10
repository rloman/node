"use strict";

// create a function which returns an iterator which contains the primes from start to end

function assert(message, assertion) {
  if(!assertion) {
    throw new Error(message);
  }
}

function isPrime(n) {
  for(let i = 2;i <= Math.sqrt(n); i++) {
    console.log("in loop")
    console.log(n);
    console.log(i);
    console.log(n%i)
    if((n % i) === 0) {
      console.log("Returing false")

      return false;
    }
  }
  console.log("returning true")
  return true;
}

function getPrimes(start, end) {
  let result = [];
  for(let n = start;n <= end;n++) {
    if(isPrime(n)) {
      console.log("add "+n)
      result.push(n);
    }
  }

  return result;
}

assert("22 should not be prime", !isPrime(22));
assert("16 should not be prime", !isPrime(16));
assert("25 should not be prime", !isPrime(25));


assert("should be prime", isPrime(5));
assert("should be prime", isPrime(1));
assert("should be prime", isPrime(7));
assert(" 17 should be prime", isPrime(17));
assert("2003 should be prime", isPrime(2003));


let iterator = getPrimes(12,22);
console.log(iterator);

for(let element of iterator){
  console.log("e:"+element);
}
