/* global document, window, select */
function userToggle() {
  const iconUser = document.querySelector('#icon-user');
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

const iconUserMob = document.querySelector('#icon-user-mob');

function userToggleMob() {
  const userDropdownMob = document.querySelector('.mobile-nav-account .user-dropdown');

  iconUserMob.addEventListener('click', () => {
    userDropdownMob.classList.toggle('user-dropdown_active');
  });

  document.addEventListener('click', (e) => {
    const { target } = e;
    const itsDropdown = target === iconUserMob || iconUserMob.contains(target);
    const isActive = userDropdownMob.classList.contains('user-dropdown_active');

    if (!itsDropdown && isActive) {
      userDropdownMob.classList.toggle('user-dropdown_active');
    }
  });
}

window.onload = userToggle();
window.onload = userToggleMob();
