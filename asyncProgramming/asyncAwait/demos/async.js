function assert(assertion, message) {
  if(!assertion) {
    throw new Error(message);
  }
}

async function foo()  {
  return "foo";
}

let result = foo();

assert(result instanceof Promise);

console.log(result);

result.then(
  function(result) {
    assert(result === "foo");
    console.log(result);
  }
);
