function displayLeaderboard(arrayOfScores){
  $('#leaderboard-list').empty();
  for(var i = 0; i < arrayOfScores.length; i++){
    var listItem = '<l>';
    listItem += arrayOfScores[i].name + ": ";
    console.log(arrayOfScores[i].name);
    listItem += arrayOfScores[i].score;
    listItem += '</l><br>';
    $('#leaderboard-list').append(listItem);
  }
}

function prepareLeaderboard (scoresData){
  var sortedScores = scoresData.sort(function(a, b) {
    return parseInt(b.score) - parseInt(a.score);
  });
  displayLeaderboard(sortedScores);
}

$("#leaderboard-button").on("click", function() {
  $('#leaderboard-modal').css("display", "block");
});

$("#close-leaderboard-button").on("click", function() {
  $('#leaderboard-modal').css("display", "none");
});

function displayModalLeaderboardButton(){
  $('#player-score').css("display", "none");
  $('#enter-name-instructions').css("display", "none");
  $('#enter-name').css("display", "none");
  $('#submit-score').css("display", "none");

  $('#show-leaderboard-button').css("display", "block");
}

$("#show-leaderboard-button").on("click", function() {
  scores.retrieve();
  $('#modal-win').css("display", "none");
  $('#leaderboard-modal').css("display", "block");
});
