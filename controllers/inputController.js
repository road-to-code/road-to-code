
$("#submit-colour").on("click", function() {
  if (validateColourInstructions()){
    var colourCommand = $('#enter-colour').val();
    var colour = colourCommand.slice(23, -1);
    $('.grass').css('backgroundColor', colour);
  }
  else {
    displayValidationError();
  }
});

$("#submit-shuffle").on("click", function() {
  var shuffle = $('#enter-shuffle').val();
  if (shuffle === "shuffle(emojis)"){
    gameController.shuffle();
  }
  else {
    displayValidationError();
  }
});

$("#addInstructions").on("click", function() {
  if (validateAddInstructions()){
    var newInstruction = $('#typed-text').val();
    var updatedList = instructions.append(newInstruction);
    updateTextBoxes(updatedList);
  }
  else{
    displayValidationError();
  }
});

function updateTextBoxes(updatedList) {
  document.getElementById('typed-text').value = "";
  $('#entered-text').html(updatedList);
}

function validateColourInstructions(){
  var colourCommand = $('#enter-colour').val();
  if (colourCommand === null || colourCommand === "") {
    return false;
  }
}

function validateAddInstructions() {
    var text = $('#typed-text').val();
    if (text === null || text === "") {
        return false;
    }
    var instructDirect = text.match(/[a-zA-Z]/g).join('');
    var openBracket = text.slice(-4,-3);
    var closeBracket = text.slice(-2, -1);
    var number = text.slice(-3,-2);
    var semicolon = text.slice(-1);
    var directions = ["moveRight", "moveLeft", "moveDown", "moveUp"];
    if(!directions.includes(instructDirect)){
      return false;
    }
    else if (!number.match(/^\d+$/)){
      return false;
    }
    else if(openBracket != "("){
      return false;
    }
    else if(closeBracket != ")"){
      return false;
    }
    else if(semicolon != ";"){
      return false;
    }
    else{
      return true;
    }
}

function displayValidationError(){
  $('div.alert').css("display", "block");
  $("#dismiss").click(function(){
    $("div.alert").hide();
  });

}
