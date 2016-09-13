var displayChar = document.getElementById('character');
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
}

function chooseCharacter(name, e){
  e.preventDefault();
  $('#mask').hide();
  $('.window').hide();
  if (name === "suse"){
  $('#character').css('backgroundImage', 'url("assets/suse.jpg")');
  displayChar.setAttribute("class", 'suse');
  }
  if (name === "mike"){
  $('#character').css('backgroundImage', 'url("assets/mike.jpeg")');}
  displayChar.setAttribute("class", 'mike');
  if (name === "luke"){
  $('#character').css('backgroundImage', 'url("assets/luke.jpeg")');}
  displayChar.setAttribute("class", 'luke');
  if (name === "dan"){
  $('#character').css('backgroundImage', 'url("assets/dan.jpeg")');}
  displayChar.setAttribute("class", 'dan');

}
