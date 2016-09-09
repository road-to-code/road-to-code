var gameController = new GameController();
var shuffle = this.shuffle;
var map = new Map();
var character = new Character();
var instructions = new Instructions();

window.onload=function(){
  gameController.startGame();
};

var container = document.getElementById('container');
var displayChar = document.getElementById('character');


document.addEventListener("click", function() {
  character.moveRight(1);
  if(character.position[0] <= 0){
    character.position[0] = 0;
  }
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
  for(var i = 0; i < instructionsList.length; i++){
    var func = instructionsList[i].match(/[a-zA-Z]/g).join('');
    var number = parseInt(instructionsList[i].match(/[1-9]/)[0]);
    character[func](number, displayChar);
  }
});
