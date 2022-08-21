/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */

function select(item) {
  return document.querySelector(item);
}

function reloadSlick() {
  $('.slider-product-card').slick('unslick');
  $('.slider-product-card').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    autoplaySpeed: 2000,
  });
}


$(document).ready(function () {
  $('.slider-product-card').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    autoplaySpeed: 2000,
  });
});

const $carousel = $('.slider-products');

const settings = {
  dots: false,
  arrows: false,
  slide: '.slider-item',
  slidesToShow: 4,
  centerMode: true,
  centerPadding: '160px',
  speed: 300,
  autoplaySpeed: 2000,
  adaptiveHeight: true,
};

function setSlideVisibility() {
  // Find the visible slides i.e. where aria-hidden="false"
  const visibleSlides = $carousel.find('.slider-item[aria-hidden="false"]');
  // Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function () {
    $(this).css('opacity', 1);
  });

  // Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
}

$carousel.slick(settings);
$carousel.slick('slickGoTo', 1);
setSlideVisibility();

$carousel.on('afterChange', function () {
  setSlideVisibility();
});







const productsLoop = select('.products-loop');













function windowOnLoad() {
  //scrollingHeader();
  //window.addEventListener("scroll", myFunction);
}

window.onload = windowOnLoad();
