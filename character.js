(function(exports){

  function Character () {
    this.position = [0, 0];
  }

  Character.prototype.moveRight = function(number) {
    this.position[0] += (number * 10);
  };

  Character.prototype.moveLeft = function(number) {
    this.position[0] -= (number * 10);
  };

  Character.prototype.moveDown = function(number) {
    this.position[1] += (number * 10);
  };

  Character.prototype.moveUp = function(number) {
    this.position[1] -= (number * 10);
  };

  exports.Character = Character;
  })(this);
