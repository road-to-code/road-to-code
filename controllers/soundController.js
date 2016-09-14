function endGameSoundEffect() {
  if(gameController.win === true){
    try {
      document.getElementById('win-game-audio').play();
    }
    catch(err) {
      document.getElementById("win-game-audio").innerHTML = err.message;
    }
  }
  else{
    try {
      document.getElementById('lose-game-audio').play();
    }
    catch(err) {
      document.getElementById("lose-game-audio").innerHTML = err.message;
    }
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

function poopSoundEffect(){
  try {
    document.getElementById('squelch-audio').play();
  }
  catch(err) {
    document.getElementById("squelch-audio").innerHTML = err.message;
  }
}

function devilSoundEffect(){
  console.log("devil sound");
}
