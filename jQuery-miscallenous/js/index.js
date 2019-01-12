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

// rloman add radioset???
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

    $("#addButtonButton").click(function() {
      $("<button>Click me</button>").addClass("binding").appendTo("body");
    });



}

$(document).ready(function() {
  trim();
  selectOnlyInputTypeText();
  workingWithTheWrappedElementSet();
  workingWithForms();
  events();
  liveEventHandling()

});
