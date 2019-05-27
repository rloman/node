// this is the asynchronous, Promise returning function
async function getAgeBasedOnCurrentAndBirthYearPromise(current, birth) {
    return current - birth;
}


// this is the asynchronouse value printing function
async function getAge(current, birth) {

  // this method invokes the ASYNCHRONOUS function AND unwraps the Promise
  let age = await getAgeBasedOnCurrentAndBirthYearPromise(current, birth);

  // prints '50'' since IT IS NOW AN INT / NUMBER
  console.log(age);
}

getAge(2018, 1968); // <= 50
