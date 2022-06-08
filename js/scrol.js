
$(function(){
 var topPos = $('.cart-galler-is').offset().top;
  $(window).scroll(function() {
  var top = $(document).scrollTop(),
      pip = $('.header-navigation-wr4').offset().top;
  if (top > topPos && top < pip - 20){$('.cart-galler-is').addClass('fixed').fadeIn();} //500 - это высота пл.блока
  else if (top > pip - 20) {$('.cart-galler-is').fadeOut(10);}
  else {$('.cart-galler-is').removeClass('fixed');}
  });
});



