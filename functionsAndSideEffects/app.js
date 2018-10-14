
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
