async function bar() {
  return "bar"; // returns Promise {bar}
}

async function printBar() {
    let value = await bar();

    console.log(value);
}


printBar();
