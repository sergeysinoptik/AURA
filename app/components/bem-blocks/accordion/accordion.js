/* eslint-disable no-undef */
// $('.accodion-body:first').show(); if you want to first accordion open. Take the first accordion HTML add class active
$('.single-acco h2').click(function() {
  // self clicking close
  if ($(this).next('.accodion-body').hasClass('active')) {
    $(this).next('.accodion-body').removeClass('active').slideUp();
    // $(this).children('span').removeClass('fa-minus').addClass('fa-plus');
    $(this).children('span').removeClass('active');
    $(this).children('span').html('+');
    $(this).removeClass('active');
    $(this).parent('.single-acco').removeClass('active');
  } else {
    $('.accodion-body').removeClass('active').slideUp();
    // $('.single-acco h2 span').removeClass('fa-minus').addClass('fa-plus');
    $('.single-acco h2 span').html('+');
    $('.single-acco h2 span').removeClass('active');
    $('.single-acco h2').removeClass('active');
    $('.single-acco').removeClass('active');
    $(this).parent('.single-acco').removeClass('active');

    $(this).next('.accodion-body').addClass('active').slideDown();
    // $(this).children('span').removeClass('fa-plus').addClass('fa-minus');
    $(this).children('span').html('-');
    $(this).children('span').addClass('active');
    $(this).addClass('active');
    $(this).parent('.single-acco').addClass('active');
  }
});
