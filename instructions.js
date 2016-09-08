(function(exports){

  function Instructions () {
    this.instructionsArr = [];
    this.typed = "";
  }

  Instructions.prototype.displayInstructions = function(typedText) {
    this.typed = this.typed || "";
    this.typed += typedText + "\n";
    return this.typed;
  };

  Instructions.prototype.addInstructions = function(typedText) {
    this.instructionsArr = this.instructionsArr || [];
    this.instructionsArr.push(typedText);
    return this.instructionsArr;
  };

  exports.Instructions = Instructions;
})(this);
