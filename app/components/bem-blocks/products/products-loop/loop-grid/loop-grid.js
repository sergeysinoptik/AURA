/* eslint-disable no-restricted-syntax */
/* global select, document, window, reloadSlick */

const toggle3col = select('#grid-3col');
const toggle4col = select('#grid-4col');

function toggleProductLoop() {
  const loopGrid = document.querySelector('.loop-grid');
  const productCard = loopGrid.querySelectorAll('.loop-grid .product-card__images');

  for (const item of productCard) {
    if (toggle3col.checked) {
      loopGrid.classList.remove('loop-grid_columns_4');
      loopGrid.classList.add('loop-grid_columns_3');
      item.classList.remove('product-card__images_size_medium');
      item.classList.add('product-card__images_size_large');
      reloadSlick();
    }
    if (toggle4col.checked) {
      loopGrid.classList.remove('loop-grid_columns_3');
      loopGrid.classList.add('loop-grid_columns_4');
      item.classList.remove('product-card__images_size_large');
      item.classList.add('product-card__images_size_medium');
      reloadSlick();
    }
  }
}

window.onload = toggle3col.addEventListener('click', toggleProductLoop);
window.onload = toggle4col.addEventListener('click', toggleProductLoop);
