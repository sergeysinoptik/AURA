/* eslint-disable no-undef */
$(document).ready(function () {
  $(".slider-main").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    autoplaySpeed: 2000,
  });
  $(".slider-collection-card").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    autoplaySpeed: 2000,
  });
  $(".slider-product-card").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    autoplaySpeed: 2000,
  });
});

var $carousel = $(".slider-products");

var settings = {
  dots: false,
  arrows: false,
  slide: ".slider-item",
  slidesToShow: 4,
  centerMode: true,
  centerPadding: "160px",
  speed: 300,
  autoplaySpeed: 2000,
  adaptiveHeight: true,
};

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $carousel.find('.slider-item[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function () {
    $(this).css("opacity", 1);
  });

  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css("opacity", 0);
}

$carousel.slick(settings);
$carousel.slick("slickGoTo", 1);
setSlideVisibility();

$carousel.on("afterChange", function () {
  setSlideVisibility();
});

$(document).ready(function () {
  $(".cp__color").on("click", function () {
    $(".cp__color").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
  });
});

const toggle3col = document.querySelector("#grid-3col");
const toggle4col = document.querySelector("#grid-4col");

const productsLoop = document.querySelector(".products-loop");

function viewToggle() {
  if (toggle3col.checked) {
    productsLoop.classList.remove("products-loop-4col");
    productsLoop.classList.add("products-loop-3col");
    $(".slider-product-card").slick("unslick");
    $(".slider-product-card").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      speed: 300,
      autoplaySpeed: 2000,
    });
  }
  if (toggle4col.checked) {
    productsLoop.classList.remove("products-loop-3col");
    productsLoop.classList.add("products-loop-4col");
    $(".slider-product-card").slick("unslick");
    $(".slider-product-card").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      speed: 300,
      autoplaySpeed: 2000,
    });
  }
}

/* $(window).scroll(function () {
  console.log($(this).scrollTop());
  if ($(this).scrollTop() > 1) {
    $(".header").addClass("sticky");
  } else {
    $(".header").removeClass("sticky");
  }
}); */

var header = document.querySelector("header");
/* var sticky = header.offsetTop;

function myFunction() {
  console.log(sticky);
  console.log(window.pageYOffset);
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function scrollingHeader() {
  // eslint-disable-next-line prefer-arrow-callback
  window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;
    console.log(scrollY);
    if (scrollY !== 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
} */



window.addEventListener('scroll', function(event) {
  const body = document.querySelector('body');
  if (body.scrollTop > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}, true);

window.addEventListener('scroll', function(event) {
  const body = document.querySelector('body');
  const filters = document.querySelector('.category-top-filters');
  const productsLoop = document.querySelector('.products-loop');
  console.log(scrollY, body.scrollTop, event.target);
  if (body.scrollTop > 85) {
    filters.classList.add("sticky");
    productsLoop.classList.add("products-loop-padding");
  } else {
    filters.classList.remove("sticky");
    productsLoop.classList.remove("products-loop-padding");
  }
}, true);

function dropdownLogic() {
  const dropdownsList = document.querySelectorAll('.dropdown');
  for (let item of dropdownsList) {
    item.addEventListener('click', function(e) {
      item.classList.toggle('active');
    })
    document.addEventListener('click', function(e) {
      let target = e.target;
      let itsDropdown = target === item || item.contains(target);
      let isActive = item.classList.contains('active');

      if (!itsDropdown && isActive) {
        item.classList.toggle('active');
      }
    })
  }
}

function windowOnLoad() {
  toggle3col.addEventListener("click", viewToggle);
  toggle4col.addEventListener("click", viewToggle);
  //scrollingHeader();
  //window.addEventListener("scroll", myFunction);
  dropdownLogic();
}

window.onload = windowOnLoad();
