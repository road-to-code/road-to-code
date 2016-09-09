(function(exports){

   function Map(){
    this.array = [
    [0, 0, 0, 0, 2, 0, 0, 0, 6, 0],
    [0, 1, 3, 0, 5, 0, 0, 0, 3, 0],
    [0, 0, 0, 8, 9, 0, 9, 10, 0, 0],
    [6, 0, 4, 6, 0, 5, 0, 0, 0, 0],
    [0, 9, 0, 0, 3, 0, 0, 0, 0, 0],
    [0, 3, 0, 6, 0, 0, 2, 3, 0, 0],
    [2, 0, 4, 0, 3, 0, 0, 6, 6, 0],
    [0, 2, 0, 0, 3, 0, 0, 3, 0, 0],
    [5, 0, 7, 0, 0, 5, 4, 0, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }

  Map.prototype.drawMap = function(){
    var emojis = [
                  { 1: "👑"},
                  { 2: "💍"},
                  { 3: "💛"},
                  { 4: "💰"},
                  { 5: "🍕"},
                  { 6: "🍩"},
                  { 7: "✨"},
                  { 8: "👼🏼"},
                  { 9: "💩"},
                  { 10: "👺"},

    ];
    for(var i=0; i < this.array.length; i++){
      for(var j=0; j < this.array[i].length; j++){

        if(parseInt(this.array[i][j]) === 0){
          $('#container').append('<div class="grass"></div>');
        }
        else{
          var emoji = parseInt(this.array[i][j]);
          var myEmoji = emojis[emoji-1][emoji];
          var x = i.toString();
          var y = j.toString();
          var emojiTile = x+y;
          $('#container').append('<div id=' + "a" + emojiTile + ' class="grass emoji diamond">' + myEmoji + '</div>');
        }
      }
    }
  };

  Map.prototype.size = function(){
    var dimensions = [this.array[0].length, this.array.length];
    return dimensions;
  };

  exports.Map = Map;
})(this);
