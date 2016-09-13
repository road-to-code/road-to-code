(function(exports) {

  function Scores() {
    this.list = [];
  }


  Scores.prototype.save = function(score){
    var httprequest = new XMLHttpRequest();
    var jsonScore = JSON.stringify(score);
    httprequest.open("POST", "http://localhost:9292/scores?name=luke&level=1&score=" + jsonScore);
    httprequest.send(jsonScore);
  };



  Scores.prototype.retrieve = function() {
  var httprequest = new XMLHttpRequest();
  var scores = this;
  httprequest.onreadystatechange = function() {
    if (httprequest.readyState == 4 && httprequest.status == 200) {
    // scores.list.push(JSON.parse(httprequest.responseText));
    scores.list.push(JSON.stringify(httprequest.responseText));
    displayLeaderboard(scores.list);
    }
  };
    httprequest.open("GET", "http://localhost:9292/scores");
    httprequest.send();
    return this.list;
};

  exports.Scores = Scores;
})(this);
