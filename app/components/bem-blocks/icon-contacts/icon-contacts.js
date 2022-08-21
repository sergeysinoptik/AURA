/* global document, window, select */
const iconContacts = document.querySelector('#icon-contacts');

function contactsToggle() {
  const contactsDropdown = select('.contacts-dropdown');

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

window.onload = contactsToggle();
