$(document).ready(function(){
  $('.main--slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    autoplaySpeed: 2000,
  });
  $('.collection--card__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    autoplaySpeed: 2000,
  });
  $('.product--card__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    autoplaySpeed: 2000,
  });
  $('.products--slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    autoplaySpeed: 2000,
  });
});
