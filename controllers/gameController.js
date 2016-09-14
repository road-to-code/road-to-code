(function(exports){
  var map = new Map();
  var shuffle = this.shuffle;

  // var shuffle = this.shuffle;
  var timer = new Timer();
  function GameController(){
    this.points = 0;
    this.gameOver = false;
    this.win = '';
    this.loss = '';
  }

  GameController.prototype.startGame = function(){
    map.setSpecialTiles();
    this.drawMap();
    displayPoints(this.points);
    showCharacters();
  };

  GameController.prototype.shuffle = function(){
    map.clearTiles();
    shuffle(map.array);
    $(".grass").remove();
    $(".start-end-tile").remove();
    map.setSpecialTiles();
    this.drawMap();
  };

  GameController.prototype.endGame = function () {
    this.gameOver = true;
    updateDisplayGameOver();
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

  GameController.prototype.checkForCollision = function(characterNewPos){
    var x = characterNewPos[1];
    var y = characterNewPos[0];
    var targetSquare = map.array[x][y];
    drawCharacterTrail(x, y);

    if(map.emojiList[targetSquare-1]){
      this.points += map.emojiList[targetSquare-1].points;
      map.array[x][y] = 0;
      updateDisplayAfterCollectingEmoji(x, y);
    }

    if(x === 2 && y === 4 || x === 2 && y === 6 || x === 4 && y === 1){
      poopSoundEffect();
    }

    if(x === 2 && y === 7){
      devilSoundEffect();
      this.gameOver = true;
    }

    if(x === 9 && y === 9){
      this.gameOver = true;
      this.win = true;
    }
  };

exports.GameController = GameController;
  })(this);
