
'use strict';

function assert(assertion, message) {
    if (!assertion) {
        throw new Error(message);
    }
}


function isPrime(n) {
    if (n < 9) {
        return n === 2 || n % 2 != 0;
    }

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if ((n % i) === 0) {
            return false;
        }
    }

    return true;
}

assert(!isPrime(22));

assert(isPrime(2));
assert(isPrime(5));

assert(!isPrime(6));


assert(isPrime(2003));

assert(!isPrime(2005));


assert(!isPrime(16));
assert(!isPrime(25));
assert(!isPrime(6));


assert(isPrime(5));
assert(!isPrime(1));
assert(isPrime(7));
assert(isPrime(17));
assert(isPrime(2003));
