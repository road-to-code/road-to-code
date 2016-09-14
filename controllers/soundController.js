function endGameSoundEffect() {
  if(gameController.win === true){
    playSoundEffect('win-game-audio');
  }
  else {
    playSoundEffect('lose-game-audio');
  }
}

function playSoundEffect(element) {
  try {
    document.getElementById(element).play();
  }
  catch(err) {
    document.getElementById(element).innerHTML = err.message;
  }
}
