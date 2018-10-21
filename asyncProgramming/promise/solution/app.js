// this is the asynchronous, Promise returning function
function getAgeBasedOnCurrentAndBirthYearPromise(current, birth) {
  if(current - birth > 0) {

    // this line returns a successful Promise (.resolve)
    return Promise.resolve(current - birth);
  }
  else {

    // this line returns a failing Promise (.reject)
    return Promise.reject(`${current} - ${birth}`);
  }
}


// this is the synchronouse value (int) returning function
function getAge(current, birth) {

  // this method invokes the ASYNCHRONOUS function
  let promisedAge = getAgeBasedOnCurrentAndBirthYearPromise(current, birth);

  // prints Promise { 50} since IT IS A PROMISE
  console.log(promisedAge);

  // now the value please

  // the result of the ASYNCHRONOUS call (promisedAge)
  promisedAge.then ( // then means, after this there are two handlers (success and error which follow)
    success => { // the success handler
      console.log(success);
    },
    error => { // the error handler
      console.log(`Unable to use this dates for calculation: ${error}`);
    }
  );

}

getAge(2018, 1968); // <= 50

getAge(1968, 2018); // <= prints failure message

// be aware that printing to the console might be random or should be even printed first both Promise objects
// and than the value(s)
