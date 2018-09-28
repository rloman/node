'use strict';

function reduce(array, combiner, start) {

  let current = start;

  for(let element of array){

      current = combiner(current, element);

  }

  return current;
}

function max(a,b) {

  return a>b ? a :b;
}

function min(a,b) {
  return a<b ? a:b;
}

function christoffel(n,m) {



  return [3,4];
}

function minmax(n,m,min,max) {

    let result = [];
    if(n < min) min = n;
    if(n > max) max = n;
    if(m < min) min = m;
    if(m > max) max = m;

    result[0] =  min;
    reult[1] = max;

}

let result = reduce([13,55,2,3,5], (n,m ) => min(n,m) , Infinity);



console.log(result);

result = reduce([13,55,2,3,5], (n,m ) => max(n,m) , -Infinity);

console.log(result);

// assert result === 12; // uitzoeken hoe via npm assert (makkelijk)

console.log(christoffel());

let resultMinMax = reduce([1,2,3], (n,m) => minmax(n,m, -Infinity, Infinity));
