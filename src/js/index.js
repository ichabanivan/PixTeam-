$(document).ready(function () {
  $('.slider').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    arrows: false
  });

  $('.js-first').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false
  });

  $('.js-second').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false
  });

  $('.big-carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false
  });
});
