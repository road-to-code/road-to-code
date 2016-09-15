(function(exports){

  function Instructions () {
    this.list = [];
    this.typed = "";
    this.processedList = [];
  }

  Instructions.prototype.append = function(typedText) {
    this.list.push(typedText);
    return (this.typed += typedText + "\n");
  };

  Instructions.prototype.splitIntoSingleMoves = function() {
    var self = this;
    this.list.forEach(function(instruction){
      self.parseInstruction(instruction);
    });
    return this.processedList;
  };

  Instructions.prototype.parseInstruction = function (instruction) {
    var move = instruction.match(/[a-zA-Z]/g).join('');
    var number = parseInt(instruction.match(/[0-9]+/)[0]);
    this.storeFunction(move, number);
  };

  Instructions.prototype.storeFunction = function(move, number){
    var self = this;
    for (var i = 0; i < number; i++){
      self.processedList.push(move);
    }
  };

  exports.Instructions = Instructions;
})(this);
