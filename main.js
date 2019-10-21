$(document).ready(function(){
  // $('.slider').slick({
  //   'setting-name': 'setting-value'
  // });

  // $('.single-item').slick();

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false
  });
});