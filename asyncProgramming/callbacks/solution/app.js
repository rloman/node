let ms = 1500;

setTimeout(() => {
  console.log("invoked my arrow callback")
}, ms);


function myCallback() {
  console.log("invoked my function callback");

  return 42;
}

ms = 500;

setTimeout(myCallback, ms);
