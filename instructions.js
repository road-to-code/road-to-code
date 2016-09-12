(function(exports){

  function Instructions () {
    this.instructionsArr = [];
    this.typed = "";
  }

  Instructions.prototype.append = function(typedText) {
    return (this.typed += typedText + "\n");
  };

  Instructions.prototype.addInstructions = function(typedText) {
    this.instructionsArr = this.instructionsArr || [];
    this.instructionsArr.push(typedText);
    return this.instructionsArr;
  };


  Instructions.prototype.process = function() {
    var processedList = [];
    this.instructionsArr.forEach(function(instruction){
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
