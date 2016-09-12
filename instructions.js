(function(exports){

  function Instructions () {
    this.list = [];
    this.typed = "";
  }

  Instructions.prototype.append = function(typedText) {
    this.list.push(typedText);
    return (this.typed += typedText + "\n");
  };

  Instructions.prototype.splitIntoSingleMoves = function() {
    var processedList = [];
    this.list.forEach(function(instruction){
      var func = instruction.match(/[a-zA-Z]/g).join('');
      var number = parseInt(instruction.match(/[0-9]+/)[0]);
      for (var i = 0; i < number; i++){
        processedList.push(func);
      }
    });
    return processedList;
  };


  exports.Instructions = Instructions;
})(this);
