/* Author: Kevin Finlayson
*/

$(document).ready(function(){
  $("body").prepend('<a href="#" id="previous"><span>Previous</span></a><a href="#" id="next"><span>Next</span></a>');  // Add the previous and next links
  $("#previous, #next").css({"opacity":"0"}) // Hide the previous and next links
  $("#slideshow-container").after('<div id="slide-info"></div><!--! slide-info -->'); // Add the slide-info div to be filled with slide info
  $("#slideshow").cycle({ // Cycle
    timeout: 0,
    speed: "fast",
    next: "#next",
    prev: "#previous",
  });
  $("#slideshow .slide:first-child").children("img").imagesLoaded(function(){ // Wait for first slide image to load
    // var slideInfo = $(this).siblings('.slide-info').html(); // Grab slide info from slide div
    // $("#slide-info").html(slideInfo); // Insert slide info into slide-info div
    $("#slideshow").animate({opacity:1}, 500, function(){ // Fade in the slideshow; wait for it to do so, then:
      $("#slide-info").animate({opacity:1},300); // Fade in slide-info
      var slideHeight = $("#slideshow .slide:first-child").height(); // Get the height of the slide
      var slideTop = $("#slideshow .slide:first-child").offset(); // Get the offset of the slide

      //Loading!

      slideTop = slideTop.top; // Get the offset top of the slide
      var windowHeight = $(window).height(); // Measure the height of the window
      if ((windowHeight > (prevnextPosition + 80)) || ((slideTop+80) > windowHeight)) { // Check to see if the window is taller than the vertical center of the slide, or if the slide is even visible
      var prevnextPosition = (((slideHeight-80)/2)+slideTop); // Set the prevnextPosition variable to the vertical center of the slide
      } else {
      var gap = windowHeight - slideTop; // If untrue, calculate the distance between the bottom of the window and the top of the slide
      var prevnextPosition = ((gap-80)/2)+slideTop; // Set prevnextPosition at the halfway point of this distance
      }
      $("#previous, #next").css({"top":prevnextPosition}); // Set previous and next links to prevnextPosition
      $("#previous, #next").animate({opacity:1}, 300);
    });

    //Scrolling!

    var $slidePos = $("#slideshow .slide:first-child").offset();
    $slideTop = $slidePos.top;
    $slideBottom = $slideTop+770;
    $(window).scroll(function(){
      var scroll = $(document).scrollTop();
      var windowHeight = $(window).height();
      var prevnextTop = $("#previous").offset();
      prevnextTop = prevnextTop.top;
      if (prevnextTop <= 899) {
        var gap = (windowHeight+scroll) - $slideTop;
        var prevnextPosition = ((gap-80)/2)+($slideTop-scroll);
        console.log("before: " + prevnextPosition);
        $("#previous, #next").css({"top":prevnextPosition});
      } else if (prevnextTop > 899) {
        var gap = ($slideBottom-scroll);
        var prevnextPosition = (gap/2)-60;
        console.log("after: " + prevnextPosition);
        $("#previous, #next").css({"top":prevnextPosition});
      }
    });
  });
})


























