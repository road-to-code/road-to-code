
$("#submit-colour").on("click", function() {
  var colourCommand = $('#enter-colour').val();
  var colour = colourCommand.slice(23, -1);
  $('.grass').css('backgroundColor', colour);
});

$("#submit-shuffle").on("click", function() {
  var shuffle = $('#enter-shuffle').val();
  if (shuffle === "shuffle(emojis)"){
    gameController.shuffle();
  }
});

$("#addInstructions").on("click", function() {
  var newInstruction = $('#typed-text').val();
  var updatedList = instructions.append(newInstruction);
  updateTextBoxes(updatedList);
});

function updateTextBoxes(updatedList) {
  document.getElementById('typed-text').value = "";
  $('#entered-text').html(updatedList);
}
