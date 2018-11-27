function successCallback(result) {

}

function failureCallback(error) {

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

createAudioFileAsync(audioSettings).then(success => {
    console.log("Audio file ready at URL: " + success);
}, error => {
    console.log("Error generating audio file: " + error);
});


audioSettings.sound = false;

createAudioFileAsync(audioSettings).then(success => {
    console.log("Audio file ready at URL: " + success);
}, error => {
    console.log("Error generating audio file: " + error);
});
