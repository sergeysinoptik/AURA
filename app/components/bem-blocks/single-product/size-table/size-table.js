/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* global document, window */
const sizeTableItems = document.querySelectorAll('.size-table__item');

function sizeTablePriceEnable(target) {
  const price = target.querySelector('.price');
  const quantitySelects = target.querySelector('.quantity-selects');

  target.addEventListener('mouseover', () => {
    price.classList.toggle('disable');
    quantitySelects.classList.toggle('enable');
  });
  target.addEventListener('mouseout', () => {
    price.classList.toggle('disable');
    quantitySelects.classList.toggle('enable');
  });
}

function sizeTableItemsToggle() {
  for (const item of sizeTableItems) {
    sizeTablePriceEnable(item);
  }
}

let quantity = 0;

function getCurrentPrice(item) {
  const currentPrice = item.querySelector('.price p').innerHTML;
  return currentPrice.substr(0, currentPrice.length - 4);
}

function changeAddToCartText(p, q) {
  const addToCartButton = document.querySelector('.add-to-cart_single-product button');
  const firstText = 'Добавить в корзину ';
  let secondText = '';
  let qStr = String(q);
  qStr = qStr[qStr.length - 1];
  if (qStr === '1' && q !== 11) {
    secondText = 'товар';
  } else if ((qStr === '2' || qStr === '3' || qStr === '4') && (q < 11 || q > 20)) {
    secondText = 'товара';
  } else {
    secondText = 'товаров';
  }

  if (q === 0) {
    addToCartButton.innerHTML = `${firstText}`;
  } else {
    addToCartButton.innerHTML = `${firstText}${q} ${secondText} (${p * q} руб)`;
  }
}

function quantityStepDown(currentItem) {
  const quantitySelects = currentItem.parentNode;
  const tableItem = quantitySelects.parentNode;
  const price = getCurrentPrice(tableItem);
  const v = currentItem.nextElementSibling.value;
  if (v > 0) {
    currentItem.nextElementSibling.stepDown();
    if (quantity > 0) {
      quantity -= 1;
      changeAddToCartText(price, quantity);
    }
  }
}

function quantityStepUp(currentItem) {
  const quantitySelects = currentItem.parentNode;
  const tableItem = quantitySelects.parentNode;
  const price = getCurrentPrice(tableItem);
  currentItem.previousElementSibling.stepUp();
  quantity += 1;
  changeAddToCartText(price, quantity);
}

window.onload = sizeTableItemsToggle();
