function getPrimeFactors(n) {

    let factorList = po(2, n);

    return factorList;

}

function po(lastFactor, n) {

    let result = [];

    //simplest case!
    if (lastFactor == n) {
        result.push(lastFactor);
    }
    else {
        // if n is divisible to lastFactor add it to the List of factors and recursively po

        if (n % lastFactor === 0) {

            result.push(lastFactor);

            // recursively factorise  n / lastFactor

            let toBeFactored = po(lastFactor, n / lastFactor);

            for (let element of toBeFactored) {
                result.push(element);
            }


        }

        // if not; increment the lastFactor by 1 and retry the recursive po
        else {
            if (lastFactor < n) {
                return po(++lastFactor, n);
            }
        }

    }

    return result;
}

function assert(assertion, message) {
    if (!assertion) {
        throw new Error(message);
    }
}


console.log(getPrimeFactors(4));
console.log(getPrimeFactors(24));

console.log(getPrimeFactors(521));

console.log(getPrimeFactors(2005));