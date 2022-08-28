/* eslint-disable no-undef */
// $('.accordion-item__body:first').show(); if you want to first accordion open. Take the first accordion HTML add class active
$('.accordion-item h2').click(function() {
  // self clicking close
  if ($(this).next('.accordion-item__body').hasClass('active')) {
    $(this).next('.accordion-item__body').removeClass('active').slideUp();
    // $(this).children('span').removeClass('fa-minus').addClass('fa-plus');
    $(this).children('span').removeClass('active');
    $(this).children('span').html('+');
    $(this).removeClass('active');
    $(this).parent('.accordion-item').removeClass('active');
  } else {
    $('.accordion-item__body').removeClass('active').slideUp();
    // $('.accordion-item h2 span').removeClass('fa-minus').addClass('fa-plus');
    $('.accordion-item h2 span').html('+');
    $('.accordion-item h2 span').removeClass('active');
    $('.accordion-item h2').removeClass('active');
    $('.accordion-item').removeClass('active');
    $(this).parent('.accordion-item').removeClass('active');

    $(this).next('.accordion-item__body').addClass('active').slideDown();
    // $(this).children('span').removeClass('fa-plus').addClass('fa-minus');
    $(this).children('span').html('-');
    $(this).children('span').addClass('active');
    $(this).addClass('active');
    $(this).parent('.accordion-item').addClass('active');
  }
});
