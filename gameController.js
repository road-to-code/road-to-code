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

  GameController.prototype.processInstructions = function(instructionsList){
    for(var i = 0; i < instructionsList.length; i++){
      var func = instructionsList[i].match(/[a-zA-Z]/g).join('');
      console.log('this is the func:');
      console.log(func);
      var number = parseInt(instructionsList[i].match(/[0-9]+/)[0]);
      console.log("this is the number");
      console.log(number);
      character[func](number);
      console.log("character pos:");
      console.log(character.position);

    }
  }


exports.GameController = GameController;
  })(this);
