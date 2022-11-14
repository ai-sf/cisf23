$.fn.nextOrFirst = function(selector) {
  var next = this.next(selector);
  return(next.length) ? next : this.prevAll(selector).last();
}

function updateImage(){
  i = Math.floor(Math.random() * 9 + 1);
  $(".gray:not(.active) img").attr({ "src": "img/menu/image-0" + i + ".svg" });
}

$.fn.accordion = function (cssclass) {
  var container = $(this);
  $(cssclass+"-header", this).on("click", function () {
    parent = $(this).parent();
    elem = $(cssclass+"-content", parent);
    if (!parent.hasClass("active")) {
      $(container).removeClass("active");
      $(parent).addClass("active");
      if ($(window).scrollTop() > $(elem).offset().top) {
        $(window).scrollTop($(parent).offset().top - 10);
      }
    } else {
      $(parent).removeClass("active");
    }
  });

}
var visible = 0;
$(document).ready(function () {
  $(".gray").css({ display: "flex" }).hide();


  $(".hamburger").on("click", function () {

    updateImage();
    $(".gray").removeClass("higher");
    $(".hamburger").toggleClass("active");
    $(".nav-menu").toggleClass("active");
    $(".navbar").toggleClass("fixed");

    $(".gray:not(.active) img").delay(300);
    $(".gray img").animate({ opacity: 1 - $(".gray img").css("opacity") });

    $(".gray.active").delay(300);
    $(".gray").fadeToggle().toggleClass("active");

  });


  $(".slideshow .slide:eq(0)").addClass("active");
  $(".slideshow .slide:gt(0)").hide();

  var duration = 1000;
  setInterval(function () {
    if ($(".slideshow .slide").length > 1) {
      $(".slideshow .slide.active:eq(0)").delay(duration).fadeOut(duration).removeClass("active").nextOrFirst('.slide').addClass("active").fadeIn(duration).end();
    }
  }, 15000);

  $(".column.small-collapse").accordion(".column");
  $(".accordion li").accordion(".item");

  $(".gray").on("click", function () {
    if ($(this).hasClass("higher")) {
      $(".popup").removeClass("active").delay(500).queue(function (next) {
        $(".gray").removeClass("higher");
        next();
      });


    } else {
      $(".hamburger").removeClass("active");
      $(".nav-menu").removeClass("active");
    }
    $(".gray img").animate({ opacity: 0 });
    $(".gray").delay(150).fadeOut().removeClass("active");
  });


  $(".popup-trigger").on("click", function () {
    target = $(this).data("trigger");
    updateImage();
    $(".gray").addClass("higher");
    $(".gray").addClass("active").fadeIn();
    $(target).addClass("active");
    $(".gray img").delay(300).animate({ opacity: 1 });
  });


  $(".popup-close").on("click", function () {
    $(".popup").removeClass("active");

    $(".gray").removeClass("active").fadeOut();
    $(".popup").removeClass("active");
    $(".gray img").animate({ opacity: 0 });
  });

});

