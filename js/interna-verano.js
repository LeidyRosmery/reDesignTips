$(".slider-drag").slick({
dots: true,
adaptiveHeight: true,
centerPadding: "10px",
mobileFirst: true,
infinite: true,
// slidesToShow: 3,
slidesToScroll: 1,
arrows: true,
variableWidth: true,
centerMode: false,
variableWidth: true,
focusOnSelect: false,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
    }
  }
]
});

$(_ => {
    $(".slick-prev.slick-arrow").html("<");
    $(".slick-next.slick-arrow").html(">");

var widthWindows = $(window).width();
if (widthWindows<992) {
  const widthSlide = (widthWindows / 100) * 76.7;
  $(".slick-slide").css("width", widthSlide);
  $(".section-videos-tip .slick-slide").css("height", widthSlide-76);
}
$(window).resize(function() {
  if(widthWindows<992){
    var widthWindows1 = $(window).width();
    const widthSlide1 = (widthWindows1 / 100) * 76.7;
    $(".slick-slide").css("width", widthSlide1);
    $(".section-videos-tip .slick-slide").css("height", widthSlide-76);
  }

});

});
