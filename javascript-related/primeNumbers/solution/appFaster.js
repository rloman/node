
'use strict';

function assert(assertion, message) {
    if (!assertion) {
        throw new Error(message);
    }
}


function isPrime(n) {

    if(n === 2) {
        return true;
    }

    let delta = 1;

    for (let i = 2; i <= Math.sqrt(n); i += delta) {
        if ((n % i) === 0) {
            return false;
        }
        if(i === 2) {
            i++; /// i is now 3 // note that 3 was already skipped in the very first loop iteration since Math.sqrt(3) < 2 (1.7)
            delta++; // deltais now 2
        }
    }

    return true;
}

assert(!isPrime(22));

assert(isPrime(2));
assert(isPrime(3));
assert(isPrime(5));

assert(!isPrime(6));


assert(isPrime(2003));

assert(!isPrime(2005));


assert(!isPrime(16));
assert(!isPrime(25));
assert(!isPrime(6));


assert(isPrime(5));
assert(isPrime(7));
assert(isPrime(17));
assert(isPrime(2003));
