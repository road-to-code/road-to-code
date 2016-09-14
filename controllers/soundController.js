function endGameSoundEffect() {
  if(gameController.win === true){
    playSoundEffect('win-game-audio');
  }
  else {
    playSoundEffect('lose-game-audio');
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


function playSoundEffect(element) {
  try {
    document.getElementById(element).play();
  }
  catch(err) {
    document.getElementById(element).innerHTML = err.message;
  }
}
