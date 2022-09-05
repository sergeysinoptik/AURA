/* eslint-disable no-restricted-syntax */
/* global document, window */
const iconMenuMob = document.querySelector('#menu-mob img');
const navButton = document.querySelector('.mm.menu-mob__nav');

function navToggleMob() {
  const contactsDropdownMob = document.querySelector('#menu-mob .contacts-dropdown');
  const dropMenu = document.querySelector('.dropdown-menu');
  iconMenuMob.addEventListener('click', () => {
    contactsDropdownMob.classList.toggle('contacts-dropdown_active');
    navButton.classList.toggle('bg_green');
    if (iconMenuMob.src.indexOf('menu-mobile') > 0) {
      iconMenuMob.src = './img/icon-close.svg';
    } else {
      iconMenuMob.src = './img/icon-menu-mobile.svg';
    }
  });

  document.addEventListener('click', (e) => {
    const { target } = e;
    const itsDropdown = target === iconMenuMob || iconMenuMob.contains(target);
    const itsDropdownContent = target === dropMenu || dropMenu.contains(target);
    const isActive = contactsDropdownMob.classList.contains('contacts-dropdown_active');

    if (!itsDropdown && !itsDropdownContent && isActive) {
      contactsDropdownMob.classList.toggle('contacts-dropdown_active');
      navButton.classList.toggle('bg_green');
      iconMenuMob.src = './img/icon-menu-mobile.svg';
    }
  });
}

const mobileMenuFirstLevelItems = document.querySelectorAll('.mobile-nav-menu-level-1-item');
const secondLevelMenuAll = document.querySelectorAll('.mobile-nav-menu-level-2');

function secondLevelMenuToggle() {
  for (const item of mobileMenuFirstLevelItems) {
    const a = item.querySelector('a');
    const secondLevelMenu = item.querySelector('.mobile-nav-menu-level-2');
    a.addEventListener('click', () => {
      for (const el of mobileMenuFirstLevelItems) {
        const elA = el.querySelector('a');
        elA.classList.remove('bg_green');
      }
      for (const i of secondLevelMenuAll) {
        if (i.classList.contains('mobile-nav-menu-level-2_active') && !(i === secondLevelMenu)) {
          i.classList.remove('mobile-nav-menu-level-2_active');
          a.classList.remove('bg_green');
        }
      }
      secondLevelMenu.classList.toggle('mobile-nav-menu-level-2_active');
      if (secondLevelMenu.classList.contains('mobile-nav-menu-level-2_active')) {
        a.classList.add('bg_green');
      } else {
        a.classList.remove('bg_green');
      }
    });
  }
}

window.onload = navToggleMob();
window.onload = secondLevelMenuToggle();
