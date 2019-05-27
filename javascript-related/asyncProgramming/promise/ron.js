function test() {
  return Promise.resolve(15);
}

console.log(test());

let result = test();

console.log(`The result is: ${result}`);


test().then(function(result) {
  console.log(result);
});
