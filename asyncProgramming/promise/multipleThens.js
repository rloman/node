
// step 1
let fifteen = Promise.resolve(15);

// step 3
fifteen.then(value => {
  console.log(`Got ${value}`); // <= Got 15

  return (value * value);
}).then (n => { // this code is INVOKED when the above is done ... not immediately!!!
  console.log(n);

  return (n+1); // or  ??? Promise.resolve(...) :-)
} ).then (n => {
  console.log(n);
});

// step 2
console.log("Done / Einde programma");
