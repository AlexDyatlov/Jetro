$(function(){

  $('.slider__main').slick({
    zIndex: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    asNavFor: '.slider__carousel',
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt=""></img>',
    responsive: [
      {
        breakpoint: 911,
        settings: {
          arrows: false,
        }
      },
    ]
  });
  
  $('.slider__carousel').slick({
    zIndex: 10,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    centerPadding: '50px',
    focusOnSelect: true,
    asNavFor: '.slider__main',
    responsive: [
      {
        breakpoint: 911,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 741,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu ul').slideToggle();
  });

});

