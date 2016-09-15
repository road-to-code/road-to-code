
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
  var tileSize = $('#a11').width();
    $('#container').find('#character').animate({
    left: newPos[0] * tileSize,
    top: newPos[1] * tileSize
  }, 200);
}

function drawCharacterTrail(x, y){
  setTimeout(function() {
    var idNumber = "a" + x.toString() + y.toString();
    document.getElementById(idNumber).setAttribute("class", "dirt");
  }, 250);
};
