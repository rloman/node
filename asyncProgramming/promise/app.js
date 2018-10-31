let fifteen = Promise.resolve(15);

fifteen.then(value => {
  console.log(`Got ${value}`); // <= Got 15
});

console.log("done now");
