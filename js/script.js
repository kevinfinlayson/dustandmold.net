/* Author: Kevin Finlayson
*/

$(document).ready(function(){
  $("#slideshow-container").prepend('<a href="#" id="previous"><span>Previous</span></a><a href="#" id="next"><span>Next</span></a>');  // Add the previous and next links
  $("#previous, #next").css({"opacity":"0"}) // Hide the previous and next links
  $("#slideshow").cycle({ // Cycle
    timeout: 0,
    speed: "fast",
    next: "#next",
    prev: "#previous",
  });
  $("#slideshow .slide:first-child").children("img").imagesLoaded(function(){ // Wait for first slide image to load
    $("#slideshow").animate({opacity:1}, 500, function(){
      $("#previous, #next").animate({opacity:1},300);
    });
  });
})


























