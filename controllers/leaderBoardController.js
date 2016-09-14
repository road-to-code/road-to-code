
function displayLeaderboard(arrayOfScores){
  // for(var i = 0; i < arrayOfScores.length; i++){
  //   leaderboardList.append('<li>' + arrayOfScores[i].name + '</li>');
  // }
  // arrayOfScores.forEach(function(item) {
  //   console.log(item.name, item.score, item.level);
  //   leaderboard.append('<li>' + item.name + '</li>');
  // });
  // document.getElementById('leaderboard').innerHTML = arrayOfScores.join(', ');
}

function prepareLeaderboard (scoresData){
  var sortedScores = scoresData.sort(function(a, b) {
    return parseInt(b.score) - parseInt(a.score);
  });
  displayLeaderboard(sortedScores);
}
