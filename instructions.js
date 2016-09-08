(function(exports){

  function Instructions () {
    this.instructions = [];
    this.typed = "";
  }

  $(document).on("#addInstructions").click(function() {
         this.typed = this.typed || "";
         this.typed += $('#typed-text').val();
         this.instructions += $('#typed-text').val();
         document.getElementById('typed-text').value = "";
         $('#entered-text').html(this.typed);
  });

  exports.Instructions = Instructions;
})(this);
