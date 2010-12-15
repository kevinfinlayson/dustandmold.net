/* Author: Kevin Finlayson
*/

$(document).ready(function(){
  $(".slide, figcaption").hide()
  $("#slideshow-container").prepend('<a href="#" title="Previous" id="previous">Previous</a><a href="#" title="Next" id="next">Next</a>');
  $("#slideshow").cycle({
    timeout: 0,
    speed: "fast",
    next: "#next",
    prev: "#previous",
  });
})
























