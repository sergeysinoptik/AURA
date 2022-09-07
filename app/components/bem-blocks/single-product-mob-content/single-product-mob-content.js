jQuery(document).ready(() => {
  jQuery('.swipe-icon').click(() => {
    jQuery('.single-product-mob-content').toggleClass('single-product-mob-content_active').delay(1100).fadeIn('slow');
  });
});
