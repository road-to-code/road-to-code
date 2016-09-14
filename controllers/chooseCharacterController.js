var displayChar = document.getElementById('character');
var character = $('character');
function showCharacters(){

  var id = '#dialog';
  var winH = $(window).height();
  var winW = $(window).width();

  $(id).css('top',  winH/2-$(id).height()/2);
  $(id).css('left', winW/2-$(id).width()/2);
  $(id).fadeIn(2000);

  $('.window #suse-button').click(function (e) {
  chooseCharacter("suse", e);
  });

  $('.window #mike-button').click(function (e) {
  chooseCharacter("mike", e);
  });

  $('.window #luke-button').click(function (e) {
  chooseCharacter("luke", e);
  });

  $('.window #dan-button').click(function (e) {
  chooseCharacter("dan", e);
  });

  $('#mask').click(function () {
  $(this).hide();
  $('.window').hide();
  });
};

function chooseCharacter(name, e){
  e.preventDefault();
  $('#mask').hide();
  $('.window').hide();
  window[name]();
};

function suse(){
  $('#character').css('backgroundImage', 'url("assets/white-bird.png")');
  displayChar.setAttribute("class", 'suse');
};

function mike(){
  $('#character').css('backgroundImage', 'url("assets/pink-bird.png")');
  displayChar.setAttribute("class", 'mike');
};

function luke(){
  $('#character').css('backgroundImage', 'url("assets/blue-bird.png")');
  displayChar.setAttribute("class", 'luke');
};

function dan(){
  $('#character').css('backgroundImage', 'url("assets/green-bird.png")');
  displayChar.setAttribute("class", 'dan');
};
