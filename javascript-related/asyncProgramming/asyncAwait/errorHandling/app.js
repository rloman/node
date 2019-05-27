async function getById(input) {
  if (input == 0) {
    throw new Error();
  }
  else {
    return "That rocks: "+input;
  }
}

async function main(input) {
  try {
    let result = await getById(input);

    console.log(result);
  }
  catch(error) {
    console.log("That went pretty wrong! :-()")
  }

}

main(3);
main(0);
