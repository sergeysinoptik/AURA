/* eslint-disable no-undef */
jQuery(document).ready(($) => {
  $('#icon-cart').on('click', (event) => {
    event.preventDefault();
    $('#side-popup-cart').addClass('is-visible');
  });
  $('#side-popup-cart').on('click', function(event) {
    if ($(event.target).is('.side-popup_close') || $(event.target).is('#side-popup-cart')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
});

jQuery(document).ready(($) => {
  $('#cart-mob').on('click', (event) => {
    event.preventDefault();
    $('#side-popup-cart').addClass('is-visible');
  });
  $('#side-popup-cart').on('click', function(event) {
    if ($(event.target).is('.side-popup_close') || $(event.target).is('#side-popup-cart')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
});
