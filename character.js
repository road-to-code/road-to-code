(function(exports){

  function Character () {
    this.position = [0, 0];
  }

  Character.prototype.moveRight = function(number) {
    this.position[0] += (number);
  };

  Character.prototype.moveLeft = function(number) {
    this.position[0] -= (number);
    // if(this.position[0] <= 0){
    //   this.position[0] = 0;
    // }
  };

  Character.prototype.moveDown = function(number) {
    this.position[1] += (number);
  };

  Character.prototype.moveUp = function(number) {
    this.position[1] -= (number);
  };

  exports.Character = Character;
  })(this);
