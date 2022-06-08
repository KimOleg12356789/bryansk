(function($) {
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});
  
$(function() {

  const accordion_items_elms = document.querySelectorAll('.accordion4 .accordion__item4');

accordion_items_elms.forEach(accordionItem => {

  accordionItem.querySelector('.accordion__item__head4').addEventListener('click', (e) => {
    accordionItem.classList.toggle('open');
  });

});

})
})(jQuery);

$(document).ready(function(){

var helpers = {
  addZeros: function (n) {
    return (n < 10) ? '' + n : '' + n;
  }
};

function sliderInit() {
  var $slider = $('.slider-holder');
  $slider.each(function() {
    var $sliderParent = $(this).parent();
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            adaptiveHeight: true
          }
        }
      ]
    });

    if ($(this).find('.item').length > 1) {
      $(this).siblings('.slides-numbers').show();
    }

    $(this).on('afterChange', function(event, slick, currentSlide){
      $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
    });

    var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
    $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

  });
  
//   $('.slick-next').on('click', function () {
//     console.log('test');
//     $('.slider-holder').slick('slickGoTo', 5);
// });
};

sliderInit();

(function($) {
$(function() {

  $('#up').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
  })

})
})(jQuery)

var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}

});