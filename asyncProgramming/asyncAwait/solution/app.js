// this is the asynchronous, Promise returning function
async function getAgeBasedOnCurrentAndBirthYearPromise(current, birth) {
    return current - birth;
}


// this is the synchronouse value (int) returning function
async function getAge(current, birth) {

  // this method invokes the ASYNCHRONOUS function
  let age = await getAgeBasedOnCurrentAndBirthYearPromise(current, birth);

  // prints Promise { 50} since IT IS A PROMISE
  console.log(age);
}

getAge(2018, 1968); // <= 50

getAge(1968, 2018); // <= prints failure message

// be aware that printing to the console might be random or should be even printed first both Promise objects
// and than the value(s)
