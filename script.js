var headerHeight = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > 175) {
    $('nav').addClass('fixed-nav');
    $('.main').addClass('main-scrolled');
  } else {
    $('nav').removeClass('fixed-nav');
    $('.main').removeClass('main-scrolled');
  }
});