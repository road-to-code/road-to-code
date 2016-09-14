function displayEmptyTile(emptyTile) {
  container.append('<div id=' + "a" + emptyTile + ' class="grass"></div>');
}

function displayGameFunctionTile(gameTile){
  container.append('<div id=' + "a" + gameTile + ' class="start-end-tile"></div>');
}

function updateTile(x, y){
  var idNumber = "a" + x.toString() + y.toString();
  document.getElementById(idNumber).innerHTML = "";
}
