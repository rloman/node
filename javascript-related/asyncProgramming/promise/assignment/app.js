// this is the asynchronous, Promise returning function
function getAgeBasedOnCurrentAndBirthYearPromise(current, birth) {
  if(current - birth > 0) {
    ...
  }
  else {
    ...
  }
}


// this is the synchronouse value (int) returning function
function getAge(current, birth) {
  let promisedAge = getAgeBasedOnCurrentAndBirthYearPromise(current, birth);

  // prints Promise { 50} since IT IS A PROMISE
  console.log(promisedAge);

  // now the value please

  promisedAge.then (
    ...,
    ...
  );

}

// should print 50
getAge(2018, 1968);

// should print an error message
getAge(1968, 2018);
