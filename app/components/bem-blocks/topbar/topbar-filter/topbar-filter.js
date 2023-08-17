/* global window, document, select */
window.addEventListener('scroll', () => {
  const filters = document.querySelector('.topbar-filter');
  const products = select('.products');
  if (filters) {
    if (window.pageYOffset > 306) {
      filters.classList.add('topbar-filter_sticky');
      filters.classList.remove('bg_grey');
      filters.classList.add('bg_white');
      products.style.paddingTop = '110px';
    } else {
      filters.classList.remove('topbar-filter_sticky');
      filters.classList.remove('bg_white');
      filters.classList.add('bg_grey');
      products.style.paddingTop = '0';
    }
  }
}, true);
