function perform() {

  let body = document.getElementsByTagName("body")[0]; // should be one body

  // or better

  body = document.body;


body.getElementsByTagName("*")
  for(let node of body.childNodes) {
  // for(let node of body.childNodes) {
    if(node.nodeType == Node.TEXT_NODE) {
    alert(node);
    alert(node.nodeValue);
    alert(node.innerText);
      alert(node.textContent);
    }
  }
}
