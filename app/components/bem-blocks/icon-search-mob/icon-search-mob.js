/* global document, window */
const iconSearchMob = document.querySelector('#search-mob');
const menuButton = document.querySelector('.mm.menu-mob__search');

function searchToggleMob() {
  const contactsDropdownMob = document.querySelector('#search-mob .contacts-dropdown');

  iconSearchMob.addEventListener('click', () => {
    contactsDropdownMob.classList.toggle('contacts-dropdown_active');
    menuButton.classList.toggle('bg_green');
  });

  document.addEventListener('click', (e) => {
    const { target } = e;
    const itsDropdown = target === iconSearchMob || iconSearchMob.contains(target);
    const isActive = contactsDropdownMob.classList.contains('contacts-dropdown_active');

    if (!itsDropdown && isActive) {
      contactsDropdownMob.classList.toggle('contacts-dropdown_active');
      menuButton.classList.toggle('bg_green');
    }
  });
}

window.onload = searchToggleMob();
