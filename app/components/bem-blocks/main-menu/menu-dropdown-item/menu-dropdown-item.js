/* eslint-disable no-restricted-syntax */
/* global document, window */
const mainMenuItems = document.querySelectorAll('.main-menu_item');

function mainMenuDropdown() {
  for (const item of mainMenuItems) {
    const trigger = item.querySelector('a');
    const dropdown = item.querySelector('.menu-dropdown-item');

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.toggle('menu-dropdown-item_active');
    });

    document.addEventListener('click', (e) => {
      const { target } = e;
      // const dropdown = item.querySelector('.menu-dropdown-item');
      const itsDropdown = target === item || item.contains(target);
      const isActive = dropdown.classList.contains('menu-dropdown-item_active');

      if (!itsDropdown && isActive) {
        dropdown.classList.toggle('menu-dropdown-item_active');
      }
    });

    item.addEventListener('mouseout', (e) => {
      const { relatedTarget } = e;
      const itsDropdown = relatedTarget === item || item.contains(relatedTarget);
      const isActive = item.classList.contains('menu-dropdown-item_active');

      if (!itsDropdown && isActive) {
        item.classList.toggle('menu-dropdown-item_active');
      }
    });
  }
}

window.onload = mainMenuDropdown();
