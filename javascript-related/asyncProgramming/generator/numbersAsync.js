"use strict";

function * getList(start, end, step) {
  for(let i = start; i <= end; i += step) {
    // new
    console.log("Yielding: "+i);
    yield i;
  }
}


for(let element of getList(5, 30, 5)) {
  console.log(element);
}
