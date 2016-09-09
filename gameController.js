(function(exports){
  var map = new Map();
  var character = new Character();
  var shuffle = this.shuffle;

  function GameController(){

  };

  GameController.prototype.startGame = function(){
    shuffle(map.array);
    map.drawMap();
  }


exports.GameController = GameController;
  })(this);
