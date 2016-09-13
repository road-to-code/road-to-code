var instructions = new Instructions();
var character = new Character();
var gameController = new GameController();
var displayChar = document.getElementById('character');
var container = $('#container');

function displayPoints(points){
  document.getElementById('points-score').innerHTML = points;
}

$(window).resize(function(){location.reload();});

$("#addInstructions").on("click", function() {
  var typedText = $('#typed-text').val();
  var text = instructions.append(typedText);
  document.getElementById('typed-text').value = "";
  $('#entered-text').html(text);
  var instructionsArr = instructions.addInstructions(typedText);
});

$("#runInstructions").on("click", function() {
  var instructionsList = instructions.process();

  (function theLoop (instructionsList, i) {
    var instruction = instructionsList[i];
    character[instruction]();
    if (instruction == "moveLeft"){flipLeft();}
    else if(instruction == "moveRight") {flipRight();}
    i ++;
    setTimeout(function () {
      moveCharacter(character.position);
      gameController.collision(character.position);
      if (i < instructionsList.length) {
        theLoop(instructionsList, i);
      }
    }, 300);
  })(instructionsList, 0);

  function moveCharacter(newPos){
    var tileSize = $('#a11').width();
    console.log(tileSize);
      $('#container').find('#character').animate({
      left: newPos[0] * tileSize,
      top: newPos[1] * tileSize
    }, 200);
  }

});

function flipLeft(){
  displayChar.setAttribute("class", 'flipped');
}

function flipRight(){
  displayChar.setAttribute("class", '');
}

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
