'use strict';

function filter(array, test){
  let result = [];

  for(let element of array) {
    if(test(element)) {
      result.push(element);
    }
  }

  return result;
}

const filterFunctionForOddNumbers = n => {
  return n % 2 === 1;
}


console.log(filter([0,1,1,2,3,5], e => e % 2 === 0));

let gefilterdeLijst = [0, 1, 1, 2,3, 5, 8, 13, 21, 34]
  .filter(n => n % 2 === 0);

  console.log(gefilterdeLijst);

  let kwadraatLijst = gefilterdeLijst.
    map(n => n * n);

    console.log(kwadraatLijst);

    let kwadraatLijstVanOnevenGetalen = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    .filter( filterFunctionForOddNumbers).map(n => n * n);

    console.log(kwadraatLijstVanOnevenGetalen);
