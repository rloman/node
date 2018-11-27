function ... iterateOverNumbers(start, step, max) {
  for(let n = start;n<=max;n += step) {
    ...
  }
}

// prints nothing  or {}... why not? :-)
// NB: When you do not iterate over an iterator returned from a generator function the code is NOT EXECUTED
let iterator = iterateOverNumbers(0,5,25);

for(let element of iterator) {
  console.log(element);
}
