(function(exports){

   function Map(){
    this.array = [
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
    [0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    ];
  }

  Map.prototype.drawMap = function(){
    for(var i=0; i < this.array.length; i++){
      for(var j=0; j < this.array[i].length; j++){

        if(parseInt(this.array[i][j]) === 0){
          $('#container').append('<div class="grass"></div>');
        }
        if(parseInt(this.array[i][j]) === 1){
          $('#container').append('<div class="dirt"></div>');
        }
      }
    }
  };

  Map.prototype.size = function(){
    var dimensions = [this.array[0].length, this.array.length];
    return dimensions;
  };

  exports.Map = Map;
})(this);
