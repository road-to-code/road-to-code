(function(exports){

  function Character () {
    this.DEFAULT_MOVE_DISTANCE = 1;
    this.position = [0, 0];
  }

  Character.prototype.moveRight = function() {
    this.position[0] += this.DEFAULT_MOVE_DISTANCE;
  };

  Character.prototype.moveLeft = function() {
    this.position[0] -= this.DEFAULT_MOVE_DISTANCE;
  };

  Character.prototype.moveDown = function() {
    this.position[1] += this.DEFAULT_MOVE_DISTANCE;
  };

  Character.prototype.moveUp = function() {
    this.position[1] -= this.DEFAULT_MOVE_DISTANCE;
  };

  exports.Character = Character;
  })(this);
