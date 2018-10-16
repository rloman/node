let fifteen = Promise.resolve(15);
fifteen.then(value => {
  console.log(`Got ${value}`); // <= Got 15

  return (value * value);
}).then (n => { // this code is INVOKED when the above is done ... not immediately!!!
  console.log(n);

  return (n+1); // or  ??? Promise.resolve(...) :-)
} ).then (n => {
  console.log(n);
});
