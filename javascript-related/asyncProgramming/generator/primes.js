"use strict";

// create a function which returns an iterator which contains the primes from start to end

function assert(message, assertion) {
  if(!assertion) {
    throw new Error(message);
  }
}

function isPrime(n) {
  if(n == 1 || n == 0 ) return false;
  for(let i = 2;i <= Math.sqrt(n); i++) {
    if((n % i) === 0) {
    return false;
    }
  }
  return true;
}

function* getPrimes(start, end) {
  for(let n = start;n <= end;n++) {
    if(isPrime(n)) {
      console.log("Yielding: "+n)
      yield n;
    }
  }
}

assert("22 should not be prime", !isPrime(22));
assert("16 should not be prime", !isPrime(16));
assert("25 should not be prime", !isPrime(25));
assert("6 should not be prime", !isPrime(6));


assert("should be prime", isPrime(5));
assert("should be prime", !isPrime(1));
assert("should be prime", isPrime(7));
assert(" 17 should be prime", isPrime(17));
assert("2003 should be prime", isPrime(2003));


let iterator = getPrimes(12, 50);

for(let element of iterator) {
  console.log(`Prime: ${element}`);
}
