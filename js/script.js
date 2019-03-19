
// Preload

$(window).on('load', function () {
	$preloader = $('.loaderArea'),
		$loader = $preloader.find('.loader');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});

$(document).ready(function() {

	// Slider (Section 1)

	$(".s1__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		arrows: false,
		fade: true,
  		cssEase: 'linear'
	});

	// Slider (Section 2)

	$(".s2__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000
	});

	// Slider (Section 3)

	$(".s3__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000
	});



});