// var audio = document.getElementById("audio");

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

  GameController.prototype.checkForCollision = function(characterNewPos){
    var x = characterNewPos[1];
    var y = characterNewPos[0];
    var targetSquare = map.array[x][y];

    drawPath(x, y);
    if(map.emojiList[targetSquare-1]){
      document.getElementById('audio').play();
      this.points += map.emojiList[targetSquare-1].points;
      map.array[x][y] = 0;
      updateTile(x, y);
      displayPoints(this.points);
    }
  };

exports.GameController = GameController;
  })(this);
