(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
	$('.carousel.carousel-slider').carousel({full_width: true});
	$('.slider').slider({full_width: true});
	$('.modal').modal();
	new WOW().init();
	$('.materialboxed').materialbox();
	
	var ch1_chat = new Typed('#ch1_chat', {
	  strings: ["!!!"],
	  typeSpeed: 60,
	  startDelay: 1000
	});
	
	var ch1_chat = new Typed('#ch1_chat', {
	  strings: [ "是伊學姊!!!"],
	  typeSpeed: 60,
	  startDelay: 1500,
	  showCursor: false
	});
	
	var ch1_chat = new Typed('#ch1_chat', {
	  strings: ["可以告訴我校刊社都在幹嘛嗎?"],
	  typeSpeed: 60,
	  startDelay: 3000,
	  showCursor: false
	});
	
	var ch2_chat = new Typed('#ch2_chat', {
	  strings: ["處理校刊編輯事務"],
	  typeSpeed: 60,
	  startDelay: 5000,
	});
	
	var ch1_chat = new Typed('#ch1_chat', {
	  strings: ["編輯?"],
	  typeSpeed: 60,
	  startDelay: 6000,
	  showCursor: false
	});
	
	var ch2_chat = new Typed('#ch2_chat', {
	  strings: ["編輯就是處理書本的文字編排或美術，社內分為文字編輯與美術編輯"],
	  typeSpeed: 60,
	  startDelay: 7000,
	  showCursor: false
	});
	
	var ch1_chat = new Typed('#ch1_chat', {
	  strings: ["喔!!! 那我也可以成為編輯嗎?"],
	  typeSpeed: 60,
	  startDelay: 10000,
	 showCursor: false
	});
	
	var ch2_chat = new Typed('#ch2_chat', {
	  strings: ["當然!我們會請老師教導你，校刊的編排與視覺設計"],
	  typeSpeed: 60,
	  startDelay: 12000,
	  showCursor: false
	});

	var ch1_chat = new Typed('#ch1_chat', {
	  strings: ["Ya!!!!","有問題放學後還可以問你嗎?"],
	  typeSpeed: 60,
	  startDelay: 14000,
	  showCursor: false
	});
	
	var ch2_chat = new Typed('#ch2_chat', {
	  strings: ["當然可以!"],
	  typeSpeed: 60,
	  startDelay: 17000,
	  showCursor: false
	});
	
	
  }); // end of document ready
})(jQuery); // end of jQuery name space