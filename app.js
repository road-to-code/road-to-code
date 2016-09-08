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
var characterLeft = 0;

document.addEventListener("click", function() {
  moveRight();
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


function moveRight() {
  characterLeft += 10;
  displayChar.style.left = characterLeft + 'px';
}
