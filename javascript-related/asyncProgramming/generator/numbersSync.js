"use strict";

function getList(start, end, step) {

  let result = [];
  for(let i = start; i <= end; i += step) {
    result.push(i);
  }

  return result;
}

for(let element of getList(5, 30, 5)) {
  console.log(element);
}
