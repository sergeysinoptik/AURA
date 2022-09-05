/* global document, window */
const iconSearchMob = document.querySelector('#search-mob svg');
const menuButton = document.querySelector('.mm.menu-mob__search');

function searchToggleMob() {
  const contactsDropdownMob = document.querySelector('#search-mob .contacts-dropdown');
  const searchForm = document.querySelector('.dropdown-search');
  iconSearchMob.addEventListener('click', () => {
    contactsDropdownMob.classList.toggle('contacts-dropdown_active');
    menuButton.classList.toggle('bg_green');
  });

  document.addEventListener('click', (e) => {
    const { target } = e;
    const itsDropdown = target === iconSearchMob || iconSearchMob.contains(target);
    const itsDropdownContent = target === searchForm || searchForm.contains(target);
    const isActive = contactsDropdownMob.classList.contains('contacts-dropdown_active');

    if (!itsDropdown && !itsDropdownContent && isActive) {
      contactsDropdownMob.classList.toggle('contacts-dropdown_active');
      menuButton.classList.toggle('bg_green');
    }
  });
}

window.onload = searchToggleMob();
