/* Author: Kevin Finlayson
*/

$(document).ready(function(){
  $(".slide, figcaption").hide()
  $("#slide-info").after('<div id="prevnext"><a href="#" title="Previous" id="previous">Previous</a><a href="#" title="Next" id="next">Next</a></div><!--! prevnext -->');
  $("#slideshow").cycle({
    timeout: 0,
    speed: "fast",
    next: "#next",
    prev: "#previous",
  });
})
























