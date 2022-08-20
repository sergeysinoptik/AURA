/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
$(document).ready(function () {
  $('.color-panel__element').on('click', function () {
    $('.color-panel__element').each(function () {
      $(this).removeClass('color-panel__element_active');
    });
    $(this).addClass('color-panel__element_active');
  });
});
