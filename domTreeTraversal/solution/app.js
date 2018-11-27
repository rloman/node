function perform() {

  let body = document.getElementsByTagName("body")[0]; // should be one body

  // or better
  body = document.body;

  for(let node of body.getElementsByTagName("*")) { // deeper (recursive)
  // for (let node of body.childNodes) { // one level deep!
    if (node.tagName == "SPAN") {
      console.log("Found span with content:" + node.innerHTML);
    }
    if (node.tagName == "TD") {
      console.log("Found TD node with content:" + node.innerHTML);
    }

    if (node.tagName == "TR") {
      console.log("Found TR node with content:" + node.innerHTML);
    }

    if (node.tagName == "TABLE") {
      console.log("Found TABLE node with content:" + node.innerHTML);
    }
  }
}
