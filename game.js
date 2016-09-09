(function(exports){

  function Game () {
    this.instructions = null;
  }

  Game.prototype.addInstructions = function(instructionsList) {
    this.instructions = instructionsList;
  };

  Game.prototype.sendInstructions = function() {
    for(var i = 0; i < this.instructions.length; i++){
      console.log(this.instructions[i]);
    }
  };

  exports.Game = Game;
  })(this);
