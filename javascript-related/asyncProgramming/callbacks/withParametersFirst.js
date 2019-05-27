function square(number) {
  console.log(number * number);
}

function printSquare(n) {
  setTimeout(function() {
    return square(n)
  }, 500);
}

printSquare(4);
