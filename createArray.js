(function(exports){

  function MapArray(){
  }

  MapArray.prototype.makeArray = function(length, max) {
    return Array.apply(null, Array(length)).map(function(_, i) {
    return Math.round(Math.random() * max);
    });
  };

  MapArray.prototype.createArray = function(){
    for(var i = 0; i < 10; i++){
      var arr = this.makeArray(10, 10);
      return arr;
    }
  };

  exports.MapArray = MapArray;
})(this);
