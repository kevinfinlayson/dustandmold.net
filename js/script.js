/* Author: Kevin Finlayson
*/

$(document).ready(function(){
  // Wait until the images are loaded before showing the pager
  $("#slideshow a").children("img").imagesLoaded(function(){
    $("#pager").animate({opacity:1}, 300);
  });
  // Add the slideshow navigation and info elements
  $("#slideshow-container").prepend('<a href="#-do" id="top-close">x</a><div id="pager"></div><!--! end of #pager --><a href="#" id="previous"><span>Previous</span></a><a href="#" id="next"><span>Next</span></a>');
  $("#slideshow-container").append('<div id="slide-info"><div id="slide-info-content"></div><!--! end of #slide-info-content --><a href="#" id="close">Close</a></div><!--! end of #slide-info -->');
  $("#slideshow").cycle({
    timeout: 0,
    speed: 100,
    next: "#next",
    prev: "#previous",
    before: onBefore,
    after: onAfter,
    pager: "#pager",
    pagerAnchorBuilder: function(idx, slide) {
      var slideTitle = $(".slide-info h3", slide).html();
      var slideImgSrc = $("img", slide).attr("src");
      return '<a href="#" class="thumb" title="' + slideTitle + '"><img src="graphics/thumb-overlay-medium.png" alt="thumb overlay graphic" class="thumb-overlay" /><img src="' + slideImgSrc + '" alt="' + slideTitle + ' image" /><h3>' + slideTitle + '</h3></a>';
    }
  });
  // Switch from pager to slideshow
  $("#pager a").click(function(){
    $("#pager").fadeOut(100, function(){
      $(this).hide();
      $("#slideshow-container").height("900px");
      $("#slideshow").show().animate({opacity:1},100);
      $("#previous, #next, #slide-info, #slide-info-content, #top-close").show().animate({opacity:1},300);
    });
  });
  // Switch from slideshow back to pager
  $("#close, #top-close").click(function(e){
    e.preventDefault();
    $("#slideshow, #previous, #next, #slide-info, #slide-info-content, #top-close").fadeOut(100, function(){
      $(this).hide();
      $("#slideshow-container").css({"height":"auto", "min-height":"632px"});
      $("#pager").show().animate({opacity:1},100);
    })
  })
  function onBefore(){
    $("#slide-info-content").fadeOut(300);
  }
  function onAfter(){
    var slideInfo = $(this).children(".slide-info").html();
    $("#slide-info-content").html(slideInfo);
    $("#slide-info-content").fadeIn(300);
  }
})


























