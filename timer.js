(function(exports){
  function Timer() {
  }

  Timer.prototype.startTimer = function(){
    $("#timer").counter({
      duration: 10000,
      countFrom: 10,
      countTo: 0,
      runOnce: true,
      easing: "easeOutCubic",
      onStart: function() {},
      onComplete: function() {
        endGame();
      },
      numberFormatter:
        function(number) {
          return number.toFixed(2) + " seconds";
        }
    });
  };


  exports.Timer = Timer;
})(this);
