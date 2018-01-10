$(".slider-drag").slick({
dots: true,
adaptiveHeight: true,
centerPadding: "10px",
mobileFirst: true,
infinite: true,
slidesToShow: 3,
slidesToScroll: 1,
arrows: false,
variableWidth: true,
centerMode: false,
variableWidth: true,
focusOnSelect: false
});

$(_ => {
var widthWindows = $(window).width();
const widthSlide = (widthWindows / 100) * 80;
$(".slick-slide").css("width", widthSlide);
$(".slick-slide").css("height", widthSlide-70);

var x = 0;
$(window).resize(function() {
  var widthWindows1 = $(window).width();
  const widthSlide1 = (widthWindows1 / 100) * 80;
  $(".slick-slide").css("width", widthSlide1);
    $(".slick-slide").css("height", widthSlide1-70);
});

});
