  var Timer = (function(){

  var seconds;
  var endTime;
  var globalTimer;

return {

  startTimer: function(){
    var start = new Date();
    $("#timer").addClass('timerStarted');
    globalTimer = setInterval(function() {
      seconds = ((new Date() - start) / parseFloat(1000)).toFixed(2);
      $('#timer').html('<i class="fa fa-clock-o" aria-hidden="true"></i>' + seconds);
      console.log(seconds);

    }, 10);
  
  },

  endTimer: function(){
    clearInterval(globalTimer);
    $('#timer').remove();
    endTime = seconds;
  },

};

})();


// var timer = duration, minutes, seconds;
// setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);
//
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//
//     display.textContent = minutes + ":" + seconds;
