function nextOddNumber(n) {

  if(n % 2 == 0) {
    return n+1;
  }
  else {
    return n+2;
  }
}

console.log(nextOddNumber(15));
