function endGameSoundEffect() {
  playSoundEffect((gameController.win === true) ? ('win-game-audio') : ('lose-game-audio'));
}

function playSoundEffect(element) {
  try {
    document.getElementById(element).play();
  }
  catch(err) {
    document.getElementById(element).innerHTML = err.message;
  }
}
