var shuffle = this.shuffle;
var map = new Map();
var character = new Character();
var instructions = new Instructions();

window.onload=function(){
  shuffle(map.array);
  map.drawMap();
};

var container = document.getElementById('container');
var displayChar = document.getElementById('character');


document.addEventListener("click", function() {
  character.moveRight();
  displayChar.style.left = character.position[0] + 'px';
});


$("#addInstructions").on("click", function() {
  var typedText = $('#typed-text').val();
  var text = instructions.displayInstructions(typedText);
  document.getElementById('typed-text').value = "";
  $('#entered-text').html(text);
  var instructionsArr = instructions.addInstructions(typedText);
});

$("#runInstructions").on("click", function() {
  var instructionsList = instructions.instructionsArr;
});

};
