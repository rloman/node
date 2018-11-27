function perform() {
  let paragraphs = document.body.getElementsByTagName("p");

  for(let paragraph of paragraphs) {
    console.log(paragraph);
    console.log(paragraph.innerHTML);
  }
}
