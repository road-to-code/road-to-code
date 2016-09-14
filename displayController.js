var instructions = new Instructions();
var character = new Character();
var gameController = new GameController();
var displayChar = document.getElementById('character');
var container = $('#container');
var scores = new Scores();
var modal = $('#modal');

function displayPoints(points){
  document.getElementById('points-score').innerHTML = points;
}

function displayGameOver() {
    document.getElementById('player-score').innerHTML = gameController.points;
    modal.css("display", "block");


}



scores.retrieve();

function displayLeaderboard(){
  var scoreList = scores.list;
  document.getElementById('leaderboard').innerHTML = scores.list.join(', ');
}

// scores.save(100);



$(window).resize(function(){location.reload();});

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
  var instructionsList = instructions.splitIntoSingleMoves();

  (function runInstructions (instructionsList, i) {
    var instruction = instructionsList[i];
    character[instruction]();
    flipCharacter(instruction);
    i ++;
    setTimeout(function () {
      moveCharacter(character.position);
      gameController.checkForCollision(character.position);
      if (i < instructionsList.length) {
        runInstructions(instructionsList, i);
      }
      else {
        gameController.endGame();
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

function collectEmojiSoundEffect(handleAudio) {
  document.getElementById('audio').play();
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
