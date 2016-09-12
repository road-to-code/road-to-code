var instructions = new Instructions();
var character = new Character();
var gameController = new GameController();
var displayChar = document.getElementById('character');
var container = $('#container');
var tileSize = 50;

function displayPoints(points){
  console.log("display points called");
  console.log(gameController.points);
  document.getElementById('points-score').innerHTML = points;
}

$("#addInstructions").on("click", function() {
  var typedText = $('#typed-text').val();
  var text = instructions.append(typedText);
  document.getElementById('typed-text').value = "";
  $('#entered-text').html(text);
  var instructionsArr = instructions.addInstructions(typedText);
});

$("#runInstructions").on("click", function() {
  var instructionsList = instructions.instructionsArr;
  var number = 0;
  for(var j = 0; j < instructionsList.length; j++){
    var instruction = instructionsList[j];
    number = parseInt(instruction.match(/[0-9]+/)[0]);
  }
  for(var s = 0; s < number; s++){
  (function theLoop (instructionsList, i) {
    var instruction = instructionsList[i];
    var func = instruction.match(/[a-zA-Z]/g).join('');
    i = i + 1;
    setTimeout(function () {
      character[func](1);
      console.log(character.position);
      moveCharacter(character.position, number, func);
      console.log("animate");
      gameController.collision(character.position);
      if (i < instructionsList.length) {
        theLoop(instructionsList, i);  // Call the loop again
      }
    }, 400);
  })(instructionsList, 0);
  }

  function moveCharacter(newPos, number, func){
    $('#container').find('#character').animate({
      left: newPos[0] * tileSize,
      top: newPos[1] * tileSize
    }, 'slow');
    }
});

function updateTile(x, y){
  var idNumber = "a" + x.toString() + y.toString();
  console.log(idNumber);
  document.getElementById(idNumber).innerHTML = "";
}

function displayEmptyTile() {
  container.append('<div class="grass"></div>');
}

function displayEmoji(emoji, emojiTile, emojiClass) {
  // hardcoded 'a' to make the numerical div id accessible
  container.append('<div id=' + "a" + emojiTile +
  ' class="grass emoji' +  " " + emojiClass + '">' + emoji + '</div>');
}
