(function(exports){
  function Timer() {
  }

  Timer.prototype.startTimer = function(duration, display){
    var timer = duration, seconds, milliseconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        // milliseconds = parseInt((timer % 60) * 10, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        // milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
        display.textContent = seconds;
        // + ":" + milliseconds;

        if (--timer < 0) {
            timer = duration;
        }

  }, 1000);
  };

  setTimeout(function(){
    endTimer();
  }, 15000);

  exports.Timer = Timer;
})(this);

// var timer = duration, minutes, seconds;
// setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);
//
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//
//     display.textContent = minutes + ":" + seconds;
