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

function myMove(newPos, axis) {
  if(axis === 'left'){
    newPos = newPos[0] * tileSize;
    var pos = displayChar.style.left;
  }
  else{
    newPos = newPos[1] * tileSize;
    var pos = displayChar.style.top;
  }
   var id = setInterval(frame, 5);
   function frame() {
       if (pos == newPos) {
           clearInterval(id);
       } else {
           pos++;
           if(axis === 'left'){
            displayChar.style.left = pos + 'px';
           }
           else{
             displayChar.style.top = pos + 'px';
           }
       }
   }
}

// myMove([5, 0], 'left');

function moveCharacter(newPos) {
  myMove(newPos, 'left');
  myMove(newPos, "top");
  // displayChar.style.left = (startPos[0] * tileSize) + 'px';
  // displayChar.style.top = (startPos[1] * tileSize) + 'px';
}
