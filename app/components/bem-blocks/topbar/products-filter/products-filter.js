/* global window, document */
window.addEventListener('scroll', () => {
  const body = document.querySelector('body');
  const filters = document.querySelector('.products-filter');
  if (filters) {
    if (body.scrollTop > 85) {
      filters.classList.add('products-filter_sticky');
    } else {
      filters.classList.remove('products-filter_sticky');
    }
  }
}, true);
