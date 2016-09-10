var instructions = new Instructions();
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
  gameController.processInstructions(instructionsList);
});

function displayEmptyTile() {
  container.append('<div class="grass"></div>');
}

function displayEmoji(emoji, emojiTile, emojiClass) {
  // hardcoded 'a' to make the numerical div id accessible
  container.append('<div id=' + "a" + emojiTile +
  ' class="grass emoji' +  " " + emojiClass + '">' + emoji + '</div>');
}

function moveCharacter(startPos) {
  displayChar.style.left = (startPos[0] * tileSize) + 'px';
  displayChar.style.top = (startPos[1] * tileSize) + 'px';
}
