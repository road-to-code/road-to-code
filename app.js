var gameController = new GameController();

window.onload=function(){
  gameController.startGame();
};

$(window).resize(function(){location.reload();});
