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

$(document).ready(function() {
  trim();
  selectOnlyInputTypeText();
  workingWithTheWrappedElementSet();
  workingWithForms();


});
