/* global window, document, select */

const scrollSearch = select('#scroll-search');
const search = select('#header-search');
const mainMenu = select('.main-menu');

function headerSearchToggle() {
  scrollSearch.addEventListener('click', () => {
    search.classList.toggle('search_active');
    mainMenu.classList.toggle('main-menu_hidden');
    document.getElementById('header-search-input').focus();
    scrollSearch.classList.add('hidden');
  });

  const body = select('body');

  window.addEventListener('scroll', () => {
    if (body.scrollTop === 0) {
      search.classList.remove('search_active');
      mainMenu.classList.remove('main-menu_hidden');
    }
  }, true);
}

window.onload = headerSearchToggle();
