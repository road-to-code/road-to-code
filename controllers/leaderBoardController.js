function displayLeaderboard(arrayOfScores){
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
