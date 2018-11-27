function doHomework(){
  // Simulate a code delay
  setTimeout( function(){
    console.log("Doing my homework!"); // you should invoke the callback here! // so pass it in ... see fix.js
  }, 500 );
}
function finishHomeWork(){
  console.log("Finished my homework!");
}


doHomework();
finishHomeWork();
