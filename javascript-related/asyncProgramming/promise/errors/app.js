function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.log("Error generating audio file: " + error);
}

function createAudioFileAsync(audioSettings, success, fail) {
  if(audioSettings.sound) {
    success("sound on!");
  }
  else {
    fail("sound should be on!");
  }
}

let audioSettings = {
  sound:true,
  volume: 50
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
