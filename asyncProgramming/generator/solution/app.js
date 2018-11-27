// this function is a generator since it contains an asterisk(*) after the function keyword
function* iterateOverNumbers(start, step, max) {
  for(let n = start;n<=max;n += step) {
    // this line is a kind of return but does not really return but just returns and keeps looping (hence it is a yield, Dutch opleveren)
    yield n;
  }
}

// prints nothing  or {}... why not? :-)
// NB: When you do not iterate over an iterator returned from a generator function the code is NOT EXECUTED
console.log(iterateOverNumbers(0,5,25));

// get the iterator
let iterator = iterateOverNumbers(0,5,25);

// loop over the iterator
for(let element of iterator) {
  console.log(element);
}
