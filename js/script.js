/* Author: Kevin Finlayson
*/

$(document).ready(function(){
  $("#slideshow-container").prepend('<a href="#" id="previous"><span>Previous</span></a><a href="#" id="next"><span>Next</span></a>');
  $("#slideshow-container").append('<div id="slide-info"><div id="slide-info-content"></div><!--! end of #slide-info-content --></div><!--! end of #slide-info -->');
  $("#slideshow").cycle({
    timeout: 0,
    speed: 300,
    next: "#next",
    prev: "#previous",
    before: onBefore,
    after: onAfter
  });
  function onBefore(){
    $("#slide-info-content").fadeOut(300);
  }
  function onAfter(){
    console.log(this);
    var slideInfo = $(this).children(".slide-info").html();
    console.log(slideInfo);
    $("#slide-info-content").html(slideInfo);
    $("#slide-info-content").fadeIn(300);
  }
  $("#slideshow .slide:first-child").children("img").imagesLoaded(function(){
    var slideInfo = $(this).siblings(".slide-info").html();
    $("#slide-info-content").html(slideInfo);
    $("#slideshow").animate({opacity:1}, 500, function(){
      $("#previous, #next, #slide-info-content").animate({opacity:1},300);
    });
  });
})


























