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


function moveRight() {
  characterLeft += 10;
  displayChar.style.left = characterLeft + 'px';

  console.log('function called');
}

$("#runInstructions").on("click", function() {

});
