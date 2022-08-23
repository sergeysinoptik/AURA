/* eslint-disable no-restricted-syntax */
/* global window, document */

function dropdownOnClick() {
  const dropdownsList = document.querySelectorAll('.dropdown');
  for (const item of dropdownsList) {
    item.addEventListener('click', () => {
      item.classList.toggle('dropdown_active');
    });
    document.addEventListener('click', (e) => {
      const { target } = e;
      const itsDropdown = target === item || item.contains(target);
      const isActive = item.classList.contains('dropdown_active');

      if (!itsDropdown && isActive) {
        item.classList.toggle('dropdown_active');
      }
    });
  }
}

window.onload = dropdownOnClick();
