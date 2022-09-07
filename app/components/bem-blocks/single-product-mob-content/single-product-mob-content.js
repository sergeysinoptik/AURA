jQuery(document).ready(() => {
  jQuery('.swipe-icon').click(() => {
    jQuery('.single-product-mob-content').toggleClass('single-product-mob-content_active').delay(1100).fadeIn('slow');
  });
});


$(function() {
	 
  //Создаем переменные
  var $productMobContent = $('.single-product-mob-content');
  var $body = $('body');
 
  //Закрытие меню свайпом
  $('.single-product-mob-content').swipe({
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
            $menu.css('transform', 'translateX(0)');
          }, 500);
        }
        if (direction == 'down' && distance > 50) {
 
          //Убираем классы у body
          $productMobContent.removeClass('single-product-mob-content_active');
 
          //Смещаем меню на 0
          setTimeout(function() {
            $menu.css('transform', 'translateX(0)');
          }, 500);
        }
      }
    },
    threshold: 0
  });
  
});