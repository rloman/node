function eventClickButton() {

  let elementsByTagTD = document.getElementsByTagName("td");

  for(element of elementsByTagTD) {
    element.innerHTML = "Changed by me!";
  }
}
