$(document).ready(function() {
var typed = "";
var instructions = [];

  $(document).on("keypress", "#typed-text", function(e) {
       if (e.which == 13) {
         typed += $('#typed-text').val();
         instructions += $('#typed-text').val();
         document.getElementById('typed-text').value = "";
         $('#entered-text').html(typed);
       }
  });

});
