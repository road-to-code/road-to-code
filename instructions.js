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

  exports.Instructions = Instructions;
})(this);
