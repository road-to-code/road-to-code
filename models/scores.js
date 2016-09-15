(function(exports) {

  function Scores() {
    this.scoreServerUrl = "http://localhost:9292/scores";
  }

  Scores.prototype.save = function(name, score, level){
    var request = new XMLHttpRequest();
    score = JSON.stringify(score);
    level = JSON.stringify(level);
    request.open("POST", this.scoreServerUrl + "?name=" + name +
    "&score=" + score + "&level=" + level);
    request.send();
  };

  Scores.prototype.retrieve = function() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
    prepareLeaderboard(JSON.parse(request.responseText));
    }
  };
    request.open("GET", this.scoreServerUrl);
    request.send();
};

  exports.Scores = Scores;
})(this);
