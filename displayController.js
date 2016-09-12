var instructions = new Instructions();
var character = new Character();
var gameController = new GameController();
var displayChar = document.getElementById('character');
var container = $('#container');
var tileSize = 50;

function displayPoints(points){
  document.getElementById('points-score').innerHTML = points;
}

$("#addInstructions").on("click", function() {
  var newInstruction = $('#typed-text').val();
  var updatedList = instructions.append(newInstruction);
  updateTextBoxes(updatedList);
});

$("#runInstructions").on("click", function() {
  var instructionsList = instructions.splitIntoSingleMoves();

  (function runInstructions (instructionsList, i) {
    var instruction = instructionsList[i];
    character[instruction]();
    flipCharacter();
    i ++;
    setTimeout(function () {
      moveCharacter(character.position);
      gameController.checkForCollision(character.position);
      if (i < instructionsList.length) {
        runInstructions(instructionsList, i);
      }
    }, 300);
  })(instructionsList, 0);

  function moveCharacter(newPos){
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
