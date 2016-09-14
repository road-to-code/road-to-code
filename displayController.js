var instructions = new Instructions();
var character = new Character();
var gameController = new GameController();
var displayChar = document.getElementById('character');
var container = $('#container');
var scores = new Scores();
var modalWin = $('#modal-win');
var modalLoss = $('#modal-loss');
var timerDisplay = $('#timer');
var timer = new Timer();


function displayPoints(points){
  document.getElementById('points-score').innerHTML = points;
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

scores.retrieve();

function displayLeaderboard(){
  var scoreList = scores.list;
  document.getElementById('leaderboard').innerHTML = scores.list.join(', ');
}

function updateDisplayGameOver () {
  endGameSoundEffect();
  hideTimer();
  displayPlayAgain();
  setTimeout(function() {
    displayGameOver();
  }, 2000);
}

function displayPlayAgain(){
  $('#play-again').css("display", "block");
}

$(window).resize(function(){location.reload();});

function hideTimer () {
  timerDisplay.css("display", "none");
}


$("#submit-colour").on("click", function() {
  var colourCommand = $('#enter-colour').val();
  var colour = colourCommand.slice(23, -1);
  $('.grass').css('backgroundColor', colour);
});

$("#submit-shuffle").on("click", function() {
  var shuffle = $('#enter-shuffle').val();
  if (shuffle === "shuffle(emojis)"){
    console.log("shuffle entered");
    gameController.shuffle();
  }
});

$("#addInstructions").on("click", function() {
  var newInstruction = $('#typed-text').val();
  var updatedList = instructions.append(newInstruction);
  updateTextBoxes(updatedList);
});


$("#submit-score").on("click", function() {
  console.log('function called');
  var name = $('#enter-name').val();
  scores.save(name, gameController.points, 1);
});

$("#runInstructions").on("click", function() {
  timer.startTimer();

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

  function moveCharacter(newPos){
    var tileSize = $('#a11').width();
      $('#container').find('#character').animate({
      left: newPos[0] * tileSize,
      top: newPos[1] * tileSize
    }, 200);
  }

});

function updateTile(x, y){
  var idNumber = "a" + x.toString() + y.toString();
  document.getElementById(idNumber).innerHTML = "";
}

function displayGameFunctionTile(gameTile){
  container.append('<div id=' + "a" + gameTile + ' class="start-end-tile"></div>');
}

function drawPath(x, y){
  var idNumber = "a" + x.toString() + y.toString();
  document.getElementById(idNumber).setAttribute("class", "dirt");
}

function displayEmptyTile(emptyTile) {
  container.append('<div id=' + "a" + emptyTile + ' class="grass"></div>');
}

function displayEmoji(emoji, emojiTile, emojiClass) {
  // hardcoded 'a' to make the numerical div id accessible
  container.append('<div id=' + "a" + emojiTile +
  ' class="grass emoji' +  " " + emojiClass + '">' + emoji + '</div>');
}

function updateTextBoxes(updatedList) {
  document.getElementById('typed-text').value = "";
  $('#entered-text').html(updatedList);
}

function flipCharacter(instruction) {
  if (instruction == "moveLeft"){
    flipLeft();
  }
  else if(instruction == "moveRight") {
    flipRight();
  }
}

function flipLeft(){
  displayChar.setAttribute("class", 'flipped');
}

function flipRight(){
  displayChar.setAttribute("class", '');
}


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

function updateDisplayAfterCollectingEmoji(x, y) {
  collectEmojiSoundEffect();
  updateTile(x, y);
  displayPoints(gameController.points);
}
