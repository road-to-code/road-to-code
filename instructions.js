$(document).ready(function() {
var typed = "";
var currentLetter = '';
var index = 0;

  $(document).on("keypress", "#typed-text", function(e) {
       if (e.which == 13) {
         typed += $('#typed-text').val();
         document.getElementById('typed-text').value = "";
         $('#entered-text').html(typed);

       }
  });

});
