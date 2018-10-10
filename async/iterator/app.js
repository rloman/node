function* iterateOverNumbers(start, step, max) {
  for(let n = start;n<=max;n += step) {
    yield n;
  }
}

// prints nothing ... why not? :-)
console.log(iterateOverNumbers(0,5,25));

let iterator = iterateOverNumbers(0,5,25);

for(let element of iterator) {
  console.log(element);
}
