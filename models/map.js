(function(exports){

   function Map(){
    this.array = [
    [0, 8, 3, 7, 2, 0, 0, 0, 6, 0],
    [0, 1, 3, 0, 5, 0, 0, 0, 3, 0],
    [0, 0, 0, 8, 9, 0, 9, 10, 0, 0],
    [6, 0, 4, 6, 0, 5, 0, 0, 0, 0],
    [0, 9, 0, 0, 3, 0, 0, 0, 0, 7],
    [0, 3, 0, 6, 0, 0, 2, 3, 0, 0],
    [2, 0, 4, 0, 3, 0, 0, 6, 6, 0],
    [0, 2, 0, 0, 3, 0, 0, 3, 0, 0],
    [5, 0, 7, 0, 0, 5, 4, 0, 3, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
    ];

    this.emojiList = [
                  { 1: "👑",
                    "points": 100,
                    "class": "crown"},
                  { 2: "💍",
                    "points": 90,
                    "class": "diamond"},
                  { 3: "💛",
                    "points": 80,
                    "class": "heart"},
                  { 4: "💰",
                    "points": 70,
                    "class": "money"},
                  { 5: "🍕",
                    "points": 60,
                    "class": "pizza"},
                  { 6: "🍩",
                    "points": 50,
                    "class": "doughnut"},
                  { 7: "✨",
                    "points": 40,
                    "class": "sparkles"},
                  { 8: "👼",
                    "points": 30,
                    "class": "angel"},
                  { 9: "💩",
                    "points": -100,
                    "class": "excrement"},
                  { 10: "👺",
                    "points": -100,
                    "class": "mask"},
    ];
  }

  Map.prototype.size = function(){
    var dimensions = [this.array[0].length, this.array.length];
    return dimensions;
  };

  Map.prototype.setSpecialTiles = function(){
    this.setStartEndTiles();
    this.setDevilTile();
    this.setPoopTiles();
  };

  Map.prototype.setStartEndTiles = function(){
    this.array[0][0] = 11;
    this.array[9][9] = 11;
  };

  Map.prototype.setDevilTile = function(){
    this.array[2][7] = 10;
  };

  Map.prototype.setPoopTiles = function(){
    this.array[2][4] = 9;
    this.array[2][6] = 9;
    this.array[4][1] = 9;
  };

  Map.prototype.clearTiles = function(){
    this.array[0][0] = 0;
    this.array[9][9] = 0;
    this.array[2][7] = 0;
    this.array[2][4] = 0;
    this.array[2][6] = 0;
    this.array[4][1] = 0;
  };

  exports.Map = Map;
})(this);
