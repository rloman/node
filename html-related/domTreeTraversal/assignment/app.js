function perform() {

  let body = document.getElementsByTagName("body")[0]; // should be one body

  // or better
  body = document.body;

  for(let node of body.getElementsByTagName("*")) { // deeper (recursive)
  // for (let node of body.childNodes) { // one level deep!
    if (node.tagName == "SPAN") {
      console.log("Found span with content:" + node.innerHTML);
    }

    // ASSIGNMENT!!!
    // read the TD inner html content

    // bonus ASSIGNMENT
    // read the table and the tr html content
  }
}
