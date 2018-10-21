function bar() {
  return Promise.resolve("bar"); // returns Promise {bar}
}

function printBar() {
    let promisedValue = bar();

    promisedValue.then(
      value => {
        console.log(value);
      }

    );
}

printBar();
