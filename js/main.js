$.fn.nextOrFirst = function(selector) {
  var next = this.next(selector);
  return(next.length) ? next : this.prevAll(selector).last();
}

$.fn.accordion = function (cssclass) {
  var container = $(this);
  $(cssclass+"-header", this).on("click", function () {
    parent = $(this).parent();
    elem = $(cssclass+"-content", parent);
    if (!parent.hasClass("active")) {
      $(container).removeClass("active");
      $(parent).addClass("active");
    } else {
      $(parent).removeClass("active");
    }
  });

}

$(document).ready(function () {

  $(".hamburger").on("click", function () {
    $(".hamburger").toggleClass("active");
    $(".nav-menu").toggleClass("active");
    $(".gray:not(.active)").fadeIn();
    $(".gray.active").fadeOut();
    $(".gray").toggleClass("active");
  });


  $(".slideshow .slide:eq(0)").addClass("active");
  $(".slideshow .slide:gt(0)").hide();

  var duration = 1000;
  setInterval(function () {
    $(".slideshow .slide.active:eq(0)").delay(duration).fadeOut(duration).removeClass("active").nextOrFirst('.slide').addClass("active").fadeIn(duration).end();

  }, 15000);

  $(".column.small-collapse").accordion(".column");
  $(".accordion li").accordion(".item");

  $(".gray").on("click", function () {
    $(".hamburger").removeClass("active");
    $(".nav-menu").removeClass("active");
    $(".gray").fadeOut().removeClass("active");
  });


});

