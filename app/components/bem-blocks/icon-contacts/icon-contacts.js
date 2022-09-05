/* global document, window, select */
const iconContacts = document.querySelector('#icon-contacts');

function contactsToggle() {
  const contactsDropdown = select('#icon-contacts .contacts-dropdown');

  iconContacts.addEventListener('click', () => {
    contactsDropdown.classList.toggle('contacts-dropdown_active');
  });

  document.addEventListener('click', (e) => {
    const { target } = e;
    const itsDropdown = target === iconContacts || iconContacts.contains(target);
    const isActive = contactsDropdown.classList.contains('contacts-dropdown_active');

    if (!itsDropdown && isActive) {
      contactsDropdown.classList.toggle('contacts-dropdown_active');
    }
  });
}

const iconContactsMob = document.querySelector('#contacts-mob');

function contactsToggleMob() {
  const contactsDropdownMob = document.querySelector('#contacts-mob .contacts-dropdown');

  iconContactsMob.addEventListener('click', () => {
    contactsDropdownMob.classList.toggle('contacts-dropdown_active');
  });

  document.addEventListener('click', (e) => {
    const { target } = e;
    const itsDropdown = target === iconContactsMob || iconContactsMob.contains(target);
    const isActive = contactsDropdownMob.classList.contains('contacts-dropdown_active');

    if (!itsDropdown && isActive) {
      contactsDropdownMob.classList.toggle('contacts-dropdown_active');
    }
  });
}

window.onload = contactsToggle();
window.onload = contactsToggleMob();
