function square(number) {
  console.log(number * number);

}

function printSquare(n) {
  setTimeout(square, 500, n);
}

printSquare(4);
