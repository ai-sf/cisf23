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
var visible = 0;
$(document).ready(function () {
  $(".gray").css({ display: "flex" }).hide();


  $(".hamburger").on("click", function () {

    i = Math.floor(Math.random() * 6 + 1);
    $(".gray:not(.active) img").attr({ "src": "img/menu/image-0" + i + ".svg" });
    $(".hamburger").toggleClass("active");
    $(".nav-menu").toggleClass("active");

    $(".gray:not(.active) img").delay(300);
    $(".gray img").animate({ opacity: 1 - $(".gray img").css("opacity") });

    $(".gray.active").delay(300);
    $(".gray").fadeToggle().toggleClass("active");

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
    visible = 0;
  });


});

