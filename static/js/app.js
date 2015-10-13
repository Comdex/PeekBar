var main = function() {
  "use strict";
  $('.content').click(function() {
    $('.barrier').fadeIn(300);
    $('.peekbar').animate({top: "50%"},300);
    $('.main').animate({width: "95%", top: "2.5%", left: "2.5%"},300);

    
  });
  $(document.getElementById("done")).click(function() {
    $('.barrier').fadeOut(300);
    $('.peekbar').animate({top: "100%"},300);
    $('.main').animate({width: "100%", top: "0%", left: "0%"},300);
  });
};

$(document).ready(main);