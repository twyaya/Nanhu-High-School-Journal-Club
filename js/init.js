(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
	$('.carousel.carousel-slider').carousel({full_width: true});
	$('.slider').slider({full_width: true});
	$('.modal').modal();
	new WOW().init();
	$('.materialboxed').materialbox();



  }); // end of document ready
})(jQuery); // end of jQuery name space