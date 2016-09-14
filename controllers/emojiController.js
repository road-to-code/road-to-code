function displayEmoji(emoji, emojiTile, emojiClass) {
  // hardcoded 'a' to make the numerical div id accessible
  container.append('<div id=' + "a" + emojiTile +
  ' class="grass emoji' +  " " + emojiClass + '">' + emoji + '</div>');
}

function updateDisplayAfterCollectingEmoji(x, y) {
  playSoundEffect('audio');
  updateTile(x, y);
  displayPoints(gameController.points);
}
