/* global $ */
$('.mobile-slider').slick({
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  vertical: true,
  verticalSwiping: true,
});

$('.mobile-slider').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true,
  },
  removalDelay: 300,
  zoom: {
    enabled: false, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function
  },

  // other options
});