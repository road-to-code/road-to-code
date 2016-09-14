(function(exports){
  var map = new Map();
  var shuffle = this.shuffle;

  function GameController(){
    this.points = 0;
  }

  GameController.prototype.startGame = function(){
    this.setStartEndTiles();
    this.drawMap();
    displayPoints(this.points);
    showCharacters();
  };

  GameController.prototype.shuffle = function(){
    this.clearStartEndTiles();
    shuffle(map.array);
    $(".grass").remove();
    $(".start-end-tile").remove();
    this.setStartEndTiles();
    this.drawMap();
  };

  GameController.prototype.endGame = function () {
    endGameSoundEffect();
    setTimeout(function() {
      displayGameOver();
    }, 2000);
  };


  GameController.prototype.drawMap = function(){
    for(var y=0; y < map.array.length; y++){
      for(var x=0; x < map.array[y].length; x++){

        if(map.array[y][x] === 0){
          var emptyTile = y.toString() + x.toString();
          displayEmptyTile(emptyTile);
        }
        else if(map.array[y][x] === 11){
          var gameTile = y.toString() + x.toString();
          displayGameFunctionTile(gameTile);
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

  GameController.prototype.setStartEndTiles = function(){
    map.array[0][0] = 11;
    map.array[9][9] = 11;
  };

  GameController.prototype.clearStartEndTiles = function(){
    map.array[0][0] = 0;
    map.array[9][9] = 0;
  };


  GameController.prototype.checkForCollision = function(characterNewPos){
    var x = characterNewPos[1];
    var y = characterNewPos[0];
    var targetSquare = map.array[x][y];
    drawPath(x, y);

    if(map.emojiList[targetSquare-1]){
      this.points += map.emojiList[targetSquare-1].points;
      map.array[x][y] = 0;
      updateDisplayAfterCollectingEmoji(x, y);
    }

    if(x === 9 && y === 9){
      console.log('Game over!');
      this.endGame();
    }
  };

exports.GameController = GameController;
  })(this);
