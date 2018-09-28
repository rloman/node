function range(start, end) {

  let array = [];
  for(let i = start;i<=end;i++) {
    array.push(i);
  }

  return array;
}


function sum(numbers) {
  let sum = 0;

  for(let element of numbers) {
    sum += element;
  }

  return sum;
}


console.log(range(2,6));

console.log(sum(range(1,6)));
