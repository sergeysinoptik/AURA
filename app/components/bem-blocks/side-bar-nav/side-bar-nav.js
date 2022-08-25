/* eslint-disable no-undef */
jQuery(document).ready(() => {
  jQuery('.contact-btn').click(() => {
    jQuery('#side-box').toggleClass('open-box');
    jQuery('#sticky-side').toggleClass('to-margin');
    // jQuery('.contact-btn').toggleClass('opened');
  });
  jQuery('#menu-close').click(() => {
    jQuery('#side-box').removeClass('open-box');
    jQuery('#sticky-side').removeClass('to-margin');
    // jQuery('.contact-btn').removeClass('opened');
  });
  jQuery('.contact-side').click(() => {
    jQuery('#conact-content').toggleClass('open-box');
  });
  jQuery(document).click((e) => {
    if (jQuery(e.target).closest('#side-box').length === 0 && jQuery(e.target).closest('.contact-btn').length === 0) {
      jQuery('#side-box').removeClass('open-box');
      jQuery('#sticky-side').removeClass('to-margin');
    }
  });
});
