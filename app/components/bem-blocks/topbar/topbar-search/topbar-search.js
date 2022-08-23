/* global select, window */

const iconClear = select('.icon-clear');
const mainSearchInput = select('#topbar-search-input');

function clearSearchInput() {
  if (iconClear) {
    iconClear.addEventListener('click', () => {
      mainSearchInput.innerHTML = '';
      mainSearchInput.value = '';
      mainSearchInput.focus();
    });
  }
}

window.onload = clearSearchInput();
