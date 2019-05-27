function ggd(a,b) {
  if(b === 0){
    return a;
  }
  else {
    return ggd(b, a % b);
  }
}

function kgv(a,b) {
  return (a*b)/ggd(a,b);
}

function relativePrime(a,b) {
  return ggd(a,b) === 1;
}

function isPrime(i) {
  for(let j = 2;j < Math.sqrt(i);j += 1) {
    if(i % j === 0) {
      return false;
    }
  }
  return true;

}

function nextPrime(start) {
  for(let i = start+1;;i++) {
      if(isPrime(i)){
        return i;
      }
  }
}

// (function() {
  // kind of main function

  console.log(ggd(27, 18));


// })();

console.log(kgv(100, 30));

console.log(ggd(748, 74));

console.log(relativePrime(15, 28));

console.log(nextPrime(5));
console.log(nextPrime(17));
console.log(isPrime(nextPrime(17)));
