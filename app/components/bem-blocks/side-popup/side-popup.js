/* eslint-disable no-undef */
jQuery(document).ready(($) => {
  $('#side-popup-size__trigger').on('click', (event) => {
    event.preventDefault();
    $('#side-popup-size').addClass('is-visible');
  });
  $('#side-popup-size').on('click', function(event) {
    if ($(event.target).is('.side-popup_close') || $(event.target).is('#side-popup-size')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
});
