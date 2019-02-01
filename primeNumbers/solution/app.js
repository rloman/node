
'use strict';

function assert(assertion, message) {
    if(!assertion) {
        throw new Error(message);
    }
}


function isPrime(n) {
    if(n ===0 || n === 1) return false;
    for(let i = 2;i <= Math.sqrt(n); i ++) {
        if((n % i) === 0) {
            return false;
        }
    }

    return true;
}

assert(isPrime(5));

assert(!isPrime(6));


assert(isPrime(2003));

assert(!isPrime(2005));