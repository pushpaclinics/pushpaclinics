(function($){
  $(function(){

	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		indicators: true
	});
	setInterval(function() {
		$('.carousel').carousel('next');
	}, 5000); // every 2.5 seconds

	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 56 // 56 is nav bar height
	    }, 500);
	});

	$('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
