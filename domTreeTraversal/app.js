function perform() {
  let paragraphs = document.body.getElementsByTagName("p");

  console.log(typeof(paragraphs));

  for(let paragraph of paragraphs) {
    console.log(paragraph);
    console.log(paragraph.innerHTML);
  }
}
