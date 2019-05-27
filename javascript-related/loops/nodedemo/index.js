console.log("Hello world!");

let numbers = [0,1,1,2,3,5,8,13,21,34,55,89,144,233];

for(let number of numbers) {
  console.log(number);
}

for(let i = 1;i < numbers.length;i++) {
  console.log(numbers[i]+", "+(numbers[i] / numbers[i-1]));
}
