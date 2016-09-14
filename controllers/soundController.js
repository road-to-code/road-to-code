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
    document.getElementById('squished-audio').play();
  }
  catch(err) {
    document.getElementById("squished-audio").innerHTML = err.message;
  }
}

function devilSoundEffect(){
  try {
    document.getElementById('evil-laugh-audio').play();
  }
  catch(err) {
    document.getElementById("evil-laugh-audio").innerHTML = err.message;
  }
}
