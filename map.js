var shuffle = this.shuffle;

var mapArray=[
[0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
[0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
[0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
[0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
[0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
];

function drawMap(){

  for(var i=0; i < mapArray.length; i++){
    for(var j=0; j < mapArray[i].length; j++){

      if(parseInt(mapArray[i][j]) === 0){
        $('#container').append('<div class="grass"></div>');
      }
      if(parseInt(mapArray[i][j]) === 1){
        $('#container').append('<div class="dirt"></div>');
      }
    }
  }

}


window.onload=function(){
  shuffle(mapArray);
  drawMap();
};
