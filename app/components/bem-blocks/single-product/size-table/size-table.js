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

function changeButtonText(button, price, qnt) {
  let quantity = 0;
  console.log(quantity, 'quantity1')
  const tableItems = document.querySelectorAll('.size-table__item');
  for (let item of tableItems) {
    let price = item.querySelector('.price p').innerHTML;
    price = price.substr(0, price.length - 4);

    let currentQuantity = item.querySelector('input').value;
    quantity += currentQuantity;
    console.log(quantity, 'quantity2')

    const quantitySteps = item.querySelectorAll('.quantity-step');
    for (const i of quantitySteps) {
      i.addEventListener('click', (e) => {
        const q = i.querySelector('input').value;
  
        console.log(q);
      })
    }
  }
}

let quantity = 0;

function quantityStepDown(e) {
  const v = e.nextElementSibling.value;
  if (v > 0) {
    e.nextElementSibling.stepDown();
    if (quantity > 0) {
      quantity -= 1;
      const addToCartButton = document.querySelector('.add-to-cart_single-product button');
      addToCartButton.innerHTML = 'Добавить в корзину ' + quantity;
    }
  }
  console.log(quantity, '--')
}

function quantityStepUp(e) {
  e.previousElementSibling.stepUp();
  quantity += 1;
  console.log(quantity, '++')
}

function aaa(p, q) {
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
  addToCartButton.innerHTML = `${firstText}${q} ${secondText} (${p * q} руб)`;
}

function addToCartText(target) {
  console.log(target.querySelector('input').value, 'target')
  let price = target.querySelector('.price p').innerHTML;
  price = price.substr(0, price.length - 4);
  aaa(price, quantity);
}

function addToCartTextChange() {
  for (const item of sizeTableItems) {
    addToCartText(item);
  }
}

window.onload = sizeTableItemsToggle();
window.onload = addToCartTextChange();
