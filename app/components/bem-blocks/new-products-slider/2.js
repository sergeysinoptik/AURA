var $carouselle = $('.slider');

var settings22 = {
  dots: false,
  arrows: true,
  slide: '.slick-slideshow__slide',
  slidesToShow: 4,
  infinite: false,
  // centerMode: false,
  // centerPadding: '60px',
};

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $carouselle.find('.slick-slideshow__slide[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
  });

  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
}

$carouselle.slick(settings22);
$carouselle.slick('slickGoTo', 1);
setSlideVisibility();

$carouselle.on('afterChange', function() {
  setSlideVisibility();
});