var instructions = new Instructions();
var character = new Character();
var gameController = new GameController();
var scores = new Scores();
var displayChar = document.getElementById('character');
var leaderboard = $('leaderboard-list');
var container = $('#container');
var modalWin = $('#modal-win');
var modalLoss = $('#modal-loss');
var timerDisplay = $('#timer');

function displayPoints(points){
  document.getElementById('points-score').innerHTML = points;
}

scores.retrieve();

$("#runInstructions").on("click", function() {
  gameController.startTimer();
  var instructionsList = instructions.splitIntoSingleMoves();
  (function runInstructions (instructionsList, i) {
    var instruction = instructionsList[i];
    character[instruction]();
    flipCharacter(instruction);
    i ++;
    setTimeout(function () {
      moveCharacter(character.position);
      gameController.checkForCollision(character.position);
      if (i < instructionsList.length && gameController.gameOver === false) {
        runInstructions(instructionsList, i);
      }
      else {
        gameController.endGame();
        gameController.loss = true;
      }
    }, 300);
  })(instructionsList, 0);
});
