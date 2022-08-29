/* global window, document */
window.addEventListener('scroll', () => {
  const body = document.querySelector('body');
  const filters = document.querySelector('.topbar-filter');
  if (filters) {
    if (window.pageYOffset > 85) {
      filters.classList.add('topbar-filter_sticky');
      filters.classList.remove('bg_grey');
      filters.classList.add('bg_white');
    } else {
      filters.classList.remove('topbar-filter_sticky');
      filters.classList.remove('bg_white');
      filters.classList.add('bg_grey');
    }
  }
}, true);
