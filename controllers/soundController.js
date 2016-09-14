function endGameSoundEffect() {
  try {
    document.getElementById('end-game-audio').play();
  }
  catch(err) {
    document.getElementById("end-game-audio").innerHTML = err.message;
  }
}

function collectEmojiSoundEffect() {
  try {
    document.getElementById('audio').play();
  }
  catch(err) {
    document.getElementById("audio").innerHTML = err.message;
  }
}
