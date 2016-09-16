const TILE_SIZE = 100;

function flipCharacter(instruction) {
  if (instruction == "moveLeft"){
    flipLeft();
  }
  else if(instruction == "moveRight") {
    flipRight();
  }
}

function flipLeft(){
  displayChar.setAttribute("class", 'flipped');
}

function flipRight(){
  displayChar.setAttribute("class", '');
}

function moveCharacter(newPos){


    $('#container').find('#character').animate({
    left: newPos[0] * TILE_SIZE,
    top: newPos[1] * TILE_SIZE
  }, 200);
}

function drawCharacterTrail(x, y){
  setTimeout(function() {
    var idNumber = "a" + x.toString() + y.toString();
    document.getElementById(idNumber).setAttribute("class", "dirt");
  }, 250);
};
