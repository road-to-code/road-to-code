var instructions = new Instructions();
var character = new Character();
var displayChar = document.getElementById('character');
var container = $('#container');
var tileSize = 50;

$("#addInstructions").on("click", function() {
  var typedText = $('#typed-text').val();
  var text = instructions.append(typedText);
  document.getElementById('typed-text').value = "";
  $('#entered-text').html(text);
  var instructionsArr = instructions.addInstructions(typedText);
});

$("#runInstructions").on("click", function() {
  var instructionsList = instructions.instructionsArr;

  (function theLoop (instructionsList, i) {
    var instruction = instructionsList[i];
    var func = instruction.match(/[a-zA-Z]/g).join('');
    var number = parseInt(instruction.match(/[0-9]+/)[0]);
    character[func](number);
    i = i + 1;
    setTimeout(function () {
      moveCharacter(character.position);
      if (i < instructionsList.length) {
        theLoop(instructionsList, i);  // Call the loop again
      }
    }, 400);
  })(instructionsList, 0);

  function moveCharacter(newPos){
      $('#container').find('#character').animate({
        left: newPos[0] * 50,
        top: newPos[1] * 50
      }, 'slow');
    }
});

function displayEmptyTile() {
  container.append('<div class="grass"></div>');
}

function displayEmoji(emoji, emojiTile, emojiClass) {
  // hardcoded 'a' to make the numerical div id accessible
  container.append('<div id=' + "a" + emojiTile +
  ' class="grass emoji' +  " " + emojiClass + '">' + emoji + '</div>');
}
