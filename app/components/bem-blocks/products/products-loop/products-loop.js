/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
window.addEventListener('scroll', function () {
  const productsLoop = document.querySelector('.products-loop');
  if (productsLoop) {
    if (body.scrollTop > 85) {
      productsLoop.classList.add('products-loop_padding-top_enabled');
    } else {
      productsLoop.classList.remove('products-loop_padding-top_enabled');
    }
  }
}, true);
