/* global window, document */

const header = document.querySelector('header');
const body = document.querySelector('body');
const searchBtn = document.querySelector('#scroll-search');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    header.classList.add('sticky');
    searchBtn.classList.remove('hidden');
  } else {
    header.classList.remove('sticky');
    searchBtn.classList.add('hidden');
  }
}, true);
