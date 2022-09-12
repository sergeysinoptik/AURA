/* global window, document */
const setHeight = () => {
  const html = document.querySelector('html');
  const singleProductMob = document.querySelector('.single-product-mob');
  const productWrapper = singleProductMob.querySelector('.product__wrapper');
  html.style.minHeight = `${window.innerHeight}px`;
  // html.style.height = window.innerHeight + "px";
  // html.style.maxHeight = window.innerHeight + "px";
  singleProductMob.style.minHeight = `calc(${window.innerHeight}px - 58px)`;
  productWrapper.style.minHeight = `calc(${window.innerHeight}px - 58px)`;
  console.log(window.innerHeight, 'window.innerHeight');
};

// define mobile screen size:

const deviceWidth = window.matchMedia('(max-width: 1024px)');

if (deviceWidth.matches) {
// set an event listener that detects when innerHeight changes:
  window.addEventListener('resize', setHeight);
  // call the function once to set initial height:
  setHeight();
}

jQuery(document).ready(() => {
  jQuery('.swipe-icon').click(() => {
    jQuery('.single-product-mob-content').toggleClass('single-product-mob-content_active'); // .delay(1100).fadeIn('slow');
  });
});


$(function() {
	 
  //Создаем переменные
  var $productMobContent = $('.single-product-mob-content');
  var swipeIcon = $('.swipe-icon');
  var productName = $('.single-product-mob-name');
  var $body = $('body');
 
  //Закрытие меню свайпом
  $('.swipe-icon').swipe({
    swipeStatus: function(event, phase, direction, distance , duration , fingerCount) {
      console.log(direction)
      //Премещаем меню на проведенное расстояние
      //$productMobContent.removeClass('single-product-mob-content_active');
 
      //Если отпустили палец, то проводим следующее:
      if (phase === $.fn.swipe.phases.PHASE_END) {
 
        //Если сдвигаем меню влево и сдвинули более 100px
        if (direction == 'up' && distance > 50) {
 
          //Убираем классы у body
          $productMobContent.addClass('single-product-mob-content_active');
 
          //Смещаем меню на 0
          setTimeout(function() {
            $productMobContent.css('transform', 'translateX(0)');
          }, 500);
        }
        if (direction == 'down' && distance > 50) {
 
          //Убираем классы у body
          $productMobContent.removeClass('single-product-mob-content_active');
 
          //Смещаем меню на 0
          setTimeout(function() {
            $productMobContent.css('transform', 'translateX(0)');
          }, 500);
        }
      }
    },
    threshold: 0
  });
  $('.single-product-mob-name').swipe({
    swipeStatus: function(event, phase, direction, distance , duration , fingerCount) {
      console.log(direction)
      //Премещаем меню на проведенное расстояние
      //$productMobContent.removeClass('single-product-mob-content_active');
 
      //Если отпустили палец, то проводим следующее:
      if (phase === $.fn.swipe.phases.PHASE_END) {
 
        //Если сдвигаем меню влево и сдвинули более 100px
        if (direction == 'up' && distance > 50) {
 
          //Убираем классы у body
          $productMobContent.addClass('single-product-mob-content_active');
 
          //Смещаем меню на 0
          setTimeout(function() {
            $productMobContent.css('transform', 'translateX(0)');
          }, 500);
        }
        if (direction == 'down' && distance > 50) {
 
          //Убираем классы у body
          $productMobContent.removeClass('single-product-mob-content_active');
 
          //Смещаем меню на 0
          setTimeout(function() {
            $productMobContent.css('transform', 'translateX(0)');
          }, 500);
        }
      }
    },
    threshold: 0
  });
  
});