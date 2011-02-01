/* Author: Kevin Finlayson
*/

$(document).ready(function(){
  // Add the slideshow navigation and info elements
  $("#slideshow-container").prepend('<a href="#-do" id="top-close"><span>Close</span></a><div id="pager"></div><!--! end of #pager --><a href="#" id="previous"><span>Previous</span></a><a href="#" id="next"><span>Next</span></a>');
  $("#slideshow-container").append('<div id="slide-info"><div id="slide-info-content"></div><!--! end of #slide-info-content --></div><!--! end of #slide-info -->');
  $(".slide").prepend('<div class="slide-overlay"></div><!--! end of .slide-overlay -->');
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
      var slideImgSrc = $("img:nth-child(2)", slide).attr("src");
      return '<a href="#" class="thumb" title="' + slideTitle + '"><div class="thumb-overlay"></div><!--! end of .thumb-overlay --><img src="' + slideImgSrc + '" alt="' + slideTitle + ' image" /><h3>' + slideTitle + '</h3></a>';
    }
  });
  function onBefore(){
    $("#slide-info-content").fadeOut(100);
  }
  function onAfter(){
    var slideInfo = $(this).children(".slide-info").html();
    $("#slide-info-content").html(slideInfo);
    $("#slide-info-content").fadeIn(100);
  }

  // Switch from pager to slideshow
  $("#pager a").click(function(){
    $("#pager").fadeOut(100, function(){
      $(this).hide();
      $("#slideshow-container").removeClass('thumb-display');
      $("#slideshow").show().animate({opacity:1},100);
      $("#previous, #next, #slide-info, #slide-info-content, #top-close, .slide-overlay").show().animate({opacity:1},300);
    });
  });
  // Switch from slideshow back to pager
  $("#close, #top-close").click(function(e){
    e.preventDefault();
    $("#slideshow, #previous, #next, #slide-info, #slide-info-content, #top-close, .slide-overlay").fadeOut(100, function(){
      $(this).hide();
      $("#slideshow-container").addClass('thumb-display');
      $("#pager").show().animate({opacity:1},100);
    })
  })
  function onResize() {
    var windowWidth = $(window).width();
    if (windowWidth > 1024) {
      $("#slideshow-container").addClass('thumb-display');
      $("#slideshow, #previous, #next, #slide-info, #slide-info-content, #top-close, .slide-overlay").css({"opacity":"0"}).hide();
      $("#pager").show().css({"opacity":"1"});
     } else if (windowWidth < 1020 && windowWidth > 768 ) {
      $("#slideshow-container").addClass('thumb-display');
      $("#slideshow, #previous, #next, #slide-info, #slide-info-content, #top-close, .slide-overlay").css({"opacity":"0"}).hide();
      $("#pager").show().css({"opacity":"1"});
    }  else if (windowWidth < 768 && windowWidth >= 480) {
      $("#slideshow-container").removeClass('thumb-display');
      $("#slideshow, #previous, #next, #slide-info, #slide-info-content, .slide-overlay").css({"opacity":"1"}).show();
      $("#pager").css({"opacity":"0"}).hide();
    } else if (windowWidth < 480 && windowWidth >= 320) {
      $("#slideshow-container").removeClass('thumb-display');
      $("#slideshow, #previous, #next, #slide-info, #slide-info-content, .slide-overlay").css({"opacity":"1"}).show();
      $("#pager").css({"opacity":"0"}).hide();
    }
  }
  $(".slide").children("img").imagesLoaded(function(){
    var windowWidth = $(window).width();
    if (windowWidth >= 768) {
      $("#slideshow-container").addClass("thumb-display");
      $("#pager").show().animate({opacity:1},100);
    } else {
      $("#pager").css({"opacity":"0"}).hide();
      $("#slideshow, #previous, #next, #slide-info, #slide-info-content, .slide-overlay").show().animate({opacity:1},100);
    }
  });
  $(window).resize(function(){
    var width = $(window).width();
    console.log(width);
    onResize();
  });
})


























