async function bar() {
  console.log("in bar");
  return "bar"; // returns Promise {bar}
}

async function printBar() {
  console.log("in printBar");
    let value = await bar();

    console.log(value);
}


printBar();
console.log("end of program");
