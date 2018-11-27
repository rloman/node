function perform() {

  let body = document.getElementsByTagName("body")[0]; // should be one body

  // or better

  body = document.body;
  for(let node of body.getElementsByTagName("*")) { // deeper (recursive)
  // for (let node of body.childNodes) {
    if (node.tagName == "SPAN") {
      console.log("Found span with content:" + node.innerHTML);
    }
    // alert(node.innerHTML);
    if (node.tagName == "TD") {
      console.log("Found TD node with content:" + node.innerHTML);
    }
  }
}
