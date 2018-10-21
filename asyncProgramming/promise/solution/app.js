function getAgeBasedOnCurrentAndBirthYearPromise(current, birth) {
  return Promise.resolve(current - birth);
}


function main(current, birth) {
  let promisedAge = getAgeBasedOnCurrentAndBirthYearPromise(current, birth);

  // prints Promise { 50} since IT IS A PROMISE
  console.log(promisedAge);

  // now the value please

  promisedAge.then (
    success => {
      console.log(success);
    },
    error => {
      console.log(`Unable to use this dates for calculation: ${error}`);
    }
  );

}

// should print 50
main(2018, 1968);

main
