(function(exports){

  function Instructions () {
    this.list = [];
    this.typed = "";
    this.function = "";
    this.number = 0;
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
      self.storeFunction();
    });
    return this.processedList;
  };

  Instructions.prototype.parseInstruction = function (instruction) {
    this.function = instruction.match(/[a-zA-Z]/g).join('');
    this.number = parseInt(instruction.match(/[0-9]+/)[0]);
  };

  Instructions.prototype.storeFunction = function(){
    var self = this;
    for (var i = 0; i < this.number; i++){
      self.processedList.push(self.function);
    }
  };

  exports.Instructions = Instructions;
})(this);
