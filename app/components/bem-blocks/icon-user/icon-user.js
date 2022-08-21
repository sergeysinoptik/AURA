/* global document, window, select */
const iconUser = document.querySelector('#icon-user');

function userToggle() {
  const userDropdown = select('.user-dropdown');

  iconUser.addEventListener('click', () => {
    userDropdown.classList.toggle('user-dropdown_active');
  });

  document.addEventListener('click', (e) => {
    const { target } = e;
    const itsDropdown = target === iconUser || iconUser.contains(target);
    const isActive = userDropdown.classList.contains('user-dropdown_active');

    if (!itsDropdown && isActive) {
      userDropdown.classList.toggle('user-dropdown_active');
    }
  });
}

window.onload = userToggle();
