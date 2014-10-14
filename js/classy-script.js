$(document).ready( function () {
    $('header').parallax({
      speed : 0.2
    });
  if (window.innerWidth < 767) {
    $('header .intro').css({ 'margin-top': '5em' });
  }
});
