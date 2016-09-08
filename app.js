var shuffle = this.shuffle;
var map = new Map();
var character = new Character();

window.onload=function(){
  shuffle(map.array);
  map.drawMap();


var container = document.getElementById('container');
var displayChar = document.getElementById('character');


document.addEventListener("click", function() {
  character.moveLeft(1);
  if(character.position[0] <= 0){
    character.position[0] = 0;
  }
  displayChar.style.left = character.position[0] + 'px';
});



};
