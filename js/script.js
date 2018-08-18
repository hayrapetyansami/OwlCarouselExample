$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 1000,
      margin: 10,
      dots: true,
      autoplayHoverPause: true,
      center: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
});