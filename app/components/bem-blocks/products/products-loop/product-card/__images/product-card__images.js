/* eslint-disable no-restricted-syntax */
/* global document */

const showPopupBtns = document.querySelectorAll('.show-popup-btn');
const popups = document.querySelectorAll('.product-popup');
const currentPopups = {};

function hideAllPopups() {
  for (const popup of popups) {
    if (popup) {
      popup.classList.remove('show');
    }
  }
}

document.addEventListener('click', (e) => {
  const { target } = e;

  let isPopup = false;
  for (const popup of popups) {
    const result = target === popup || popup.contains(target);
    if (result === true) {
      isPopup = result;
    }
  }

  let isBtn = false;
  for (const btn of showPopupBtns) {
    const result = target === btn || btn.contains(target);
    if (result === true) {
      isBtn = result;
    }
  }

  if (!isPopup && !isBtn) {
    for (const popup of popups) {
      popup.classList.remove('show');
      console.log('removed');
    }
  }
});

showPopupBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetPopupID = `#${btn.dataset.target}`;
    const popup = document.querySelector(targetPopupID);
    hideAllPopups();
    popup.classList.add('show');
  });
});

popups.forEach((popup) => {
  currentPopups[popup.id] = null;

  popup.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  popup.addEventListener('transitionend', () => {
    const popupRect = popup.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (popupRect.bottom === windowHeight) {
      currentPopups[popup.id] = popup;
    } else {
      currentPopups[popup.id] = null;
    }
  });
});
