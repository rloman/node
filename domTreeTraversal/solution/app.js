function perform() {

  let body = document.getElementsByTagName("body")[0]; // should be one body

  // or better

  body = document.body;



  for(let node of body.getElementsByTagName("*")) {
  // for(let node of body.childNodes) {
  // alert(node);
  console.log(node.tagName);
  if(node.tagName == "SPAN") {
    console.log("Found span with content:"+node.innerHTML);
  }
  // alert(node.innerHTML);
  if(node.tagName == "TD") {
    alert(node.innerHTML);
  }
    if(node.nodeType == Node.TEXT_NODE) {
      alert(node.tagName);
    }
  }
}
