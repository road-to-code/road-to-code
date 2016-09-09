var instructions = new Instructions();
var displayChar = document.getElementById('character');

$("#addInstructions").on("click", function() {
  var typedText = $('#typed-text').val();
  var text = instructions.append(typedText);
  document.getElementById('typed-text').value = "";
  $('#entered-text').html(text);
  var instructionsArr = instructions.addInstructions(typedText);
});


$("#runInstructions").on("click", function() {
  var instructionsList = instructions.instructionsArr;
  gameController.processInstructions(instructionsList);
});
