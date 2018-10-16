function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.log("Error generating audio file: " + error);
}

function createAudioFileAsync(audioSettings) {
  if(audioSettings.sound) {
    return Promise.resolve(audioSettings.volume);// success("sound on!");
  }
  else {
    return Promise.reject(audioSettings.volume);
  }
}

let audioSettings = {
  sound:true,
  volume: 50
}

var promise = createAudioFileAsync(audioSettings);

promise.then(successCallback, failureCallback);


audioSettings.sound = false;
promise = createAudioFileAsync(audioSettings);

promise.then(successCallback, failureCallback);
