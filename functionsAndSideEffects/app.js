
var leeftijd = 45;

//bad

function increaseAge(age) {
  leeftijd = 45;

  console.log("Leaving increaseAge"+leeftijd++);

  return age+1;
}


// good
function goodIncreaseAge(age) {
  return age+1;
}


class Dog {

  constructor(age) {
    this._age = age;
  }

  set age(age) {
    this._age = age;
  }

  get age() {
    return this._age;
  }

  jarig() {
    this._age++;
  }

}

let dog = new Dog(3);
dog.jarig();

console.log(dog.age)
