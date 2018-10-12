function foo(a) {
  // console.log(a);

  // how to get the second input parameter???

  for(arg of arguments) {
    console.log(arg);
  }

  console.log("Argument drie:"+arguments[3]);

}

foo(1,2);

foo("the", "quick", "brown", "fox", "drinks", "Grolsch");
