
'use strict';

function assert(assertion, message) {
    if(!assertion) {
        throw new Error(message);
    }
}


function isPrime(n) {
    if(n === 2) {
        return true;
    }
    let max = Math.sqrt(n);
    console.log(max);
    for(let i = 3;i <= Math.sqrt(n); i += 2) {
        console.log(i);
        if((n % i) === 0) {
            return false;
        }
    }

    return true;
}

assert(isPrime(5));

assert(!isPrime(6));
