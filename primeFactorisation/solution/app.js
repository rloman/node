function po(n) {

    let factorList = _po(2, n);

    return factorList;

}

function _po(lastFactor, n) {

    let result = [];

    //simplest case!
    if (lastFactor == n) {
        result.push(lastFactor);
    }
    else {
        // if n is divisible to lastFactor add it to the List of factors and recursively _po

        if (n % lastFactor === 0) {

            result.push(lastFactor);

            // recursively factorise  n / lastFactor
            let toBeFactored = _po(lastFactor, n / lastFactor);



            // // add the sub elements to the result
            for (let element of toBeFactored) {
                result.push(element);
            }
        }

        // if not; increment the lastFactor by 1 and retry the recursive _po
        else {
            if (lastFactor < n) {
                return _po(++lastFactor, n);
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

function assertEquals(a, b) {
    if(a != b) {
        let label =`Expected: >${a}<, but was: >${b}<`;
        throw new Error(label);
    }
}


console.log(po(4));
console.log(po(24));
console.log(po(521));
console.log(po(2005));


assertEquals([2,2,2,3], po(24));