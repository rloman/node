function assert(assertion, message) {
  if(!assertion) {
    // console.log(message);
    throw new Error(message);
  }
}

function trim() {
  let a = $.trim("              some string       ");
  console.log(">" + a + "<");
}

function selectOnlyInputTypeText() {
  let inputTypes = $("input[type='text']"); //...
  console.log(inputTypes);
  inputTypes.each(function(element) {
    console.log(">2"+$(this).val());
  });
}

function workingWithTheWrappedElementSet() {
  let inputTypes = $("input[type='text']"); //...
  assert(inputTypes.length === 1);
  assert(inputTypes.get(0) != null);

  assert(inputTypes.first() != null);
  assert(inputTypes.last() != null);
  // slice
}

function workingWithForms() {
  // all checked boxed
  $("input:checked").each(function() {
    console.log($(this).val());
  });

}

function events() {

  // remove a handler
  $(".normal").click(function() {
    console.log("You clicked me");
    $(".normal").unbind("click"); // removes the click handler
    $(".once").one("click", function() {
      console.log("You clicked me once and now I will not listen anymore");
    })
  });
}

// useful when you have an event handler and not a button yet
// api has changed from 1.8 to 1.9
// from $("selector").life("click", function() { ... }) to   =>
function liveEventHandling() {

    // bind handler to elements that might not be an the page yet
    // Handler is added to newly created elements that match the selector
    $("body").on("click", ".binding",  function() {
      console.log("Live is life, Focus");
    });

    $("#addButtonButton").click(function(event, data) {
      assert(event.type === 'click');
      console.log(event); // should be some like click
      console.log(data);
      $("<button>Click me</button>").addClass("binding").appendTo("body");
    });
}

function triggerEventsFromCode() {
  // click the button automatically with class .binding
  $("a").click(function() {
    $("#addButtonButton").trigger("click", {
      someData: 'hello'
    });
    // other examples for sending some data using the .trigger
    // or [1,2] => ... data
    // or [1,2] => a,b
  });
}

function utilityFunctions() {
  let values = [0,1,1,2,3,5,8,13,21,34,55];

  // a loop $.each(container, callback)
  $.each(values, function(index) {
    console.log(`Fibon: ${index} has value ${this}`);
  });

  // mapping
  // $.map(container, callback)
  // Creates a new collection containing the returned values from the map function
  let newValues = $.map(values, function(data, index) {
      return data * data;
  });

  // loop it again using each :-)
  $.each(newValues, function(index){
      console.log(`${values[index]} squared is ${this}`);
  });

  // now gimme only the even Fibonacci numbers please
// $.grep(array, function(, invert))
  let evenFibons = $.grep(values, function(element) {
    return element %2 == 0;
  });
  console.table(evenFibons);
}

$(document).ready(function() {
  trim();
  selectOnlyInputTypeText();
  workingWithTheWrappedElementSet();
  workingWithForms();
  // events();
  liveEventHandling();
  triggerEventsFromCode();
  utilityFunctions();

});
