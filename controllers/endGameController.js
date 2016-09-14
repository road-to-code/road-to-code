function updateDisplayGameOver () {
  endGameSoundEffect();
  hideTimer();
  displayPlayAgain();
  setTimeout(function() {
    displayGameOver();
  }, 2000);
}


$("#submit-score").on("click", function() {
  console.log('function called');
  var name = $('#enter-name').val();
  scores.save(name, gameController.points, 1);
});

function displayPlayAgain(){
  $('#play-again').css("display", "block");
}

function hideTimer () {
  timerDisplay.css("display", "none");
}


function displayGameOver() {
  document.getElementById('player-score').innerHTML = gameController.points;
  if(gameController.win === true){
    console.log("game win");
    modalWin.css("display", "block");
  }
  else{
    console.log("game loss");
    modalLoss.css("display", "block");
  }
}
