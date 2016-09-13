(function(exports){
  var map = new Map();
  // var shuffle = this.shuffle;

  function GameController(){
    this.points = 0;
  }

  GameController.prototype.startGame = function(){
    // shuffle(map.array);
    this.drawMap();
    displayPoints(this.points);
  };

  GameController.prototype.drawMap = function(){
    for(var y=0; y < map.array.length; y++){
      for(var x=0; x < map.array[y].length; x++){

        if(map.array[y][x] === 0){
          var emptyTile = y.toString() + x.toString();
          displayEmptyTile(emptyTile);
        }
        else{
          var currentMapValue = map.array[y][x];
          var emojiClass = map.emojiList[currentMapValue-1].class;
          var emoji = map.emojiList[currentMapValue-1][currentMapValue];
          var emojiTile = y.toString() + x.toString();
          displayEmoji(emoji, emojiTile, emojiClass);
        }
      }
    }
  };

  GameController.prototype.collision = function(position){
    var x = position[1];
    var y = position[0];
    var arrValue = map.array[x][y];
    drawPath(x, y);
    if(map.emojiList[arrValue-1]){
      document.getElementById('audio').play();
      this.points += map.emojiList[arrValue-1].points;
      map.array[x][y] = 0;
      updateTile(x, y);
      displayPoints(this.points);
    }
  };

exports.GameController = GameController;
  })(this);
