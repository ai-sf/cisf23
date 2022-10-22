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

    $(".hamburger").toggleClass("active");
    $(".nav-menu").toggleClass("active");
    if (visible) {
      $(".gray img").animate({ opacity: 0 });
      $(".gray").delay(200).fadeOut().removeClass("active");
    } else {
      i = Math.floor(Math.random() * 5 +1);
      $(".gray img").attr({ "src": "img/menu/image-0"+i+".svg"});
      $(".gray").fadeIn().addClass("active");
      $(".gray img").delay(300).animate({ opacity: 1 });
    }

    $(".gray").toggleClass("active");
    visible = 1 - visible;
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

