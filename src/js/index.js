$(document).ready(function () {
  $('#js-slider').slick({
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

  $('#js-big-carousel').slick({
    autoplay: false,
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }]
  });

  $('#js-feedback').validate({
    validClass: 'success-feedback',
    rules: {
      name: {
        minlength: 3,
        required: true
      },
      email: {
        email: true,
        required: true
      },
      comment: {
        minlength: 10,
        required: true
      }
    }
  });

  $('#js-zip-code').validate({
    validClass: 'success',
    rules: {
      code: {
        minlength: 8,
        required: true
      }
    }
  });

  initMap()
});

let map;

window.initMap = function () {
  map = new google.maps.Map(document.getElementById('js-map'), {
    center: {lat: 8.9196043, lng: 76.6433878},
    zoom: 15,
    disableDefaultUI: true
  });
}
let transitLayer = new google.maps.TransitLayer();
transitLayer.setMap(map);
