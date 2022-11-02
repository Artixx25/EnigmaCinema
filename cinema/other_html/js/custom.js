
/*Index Of Script*/

(function (jQuery) {
	"use strict";
	jQuery(document).ready(function() {

		function activaTab(pill) {
			jQuery(pill).addClass('active show');
		}
		
		/*---------------------------------------------------------------------
			Back to Top
		---------------------------------------------------------------------*/
		var btn = $('#back-to-top');
		$(window).scroll(function () {
			if ($(window).scrollTop() > 50) {
				btn.addClass('show');
			} else {
				btn.removeClass('show');
			}
		});
		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});

		/*---------------------------------------------------------------------
			Slick Slider
		----------------------------------------------------------------------- */
		$('#home-slider').slick({
			autoplay: false,
			speed: 800,
			lazyLoad: 'progressive',
			arrows: true,
			dots: false,
			prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
			nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						dots: true,
						arrows: false,
					}
				}
			]
		}).slickAnimation();
		$('.slick-nav').on('click touch', function (e) {

			e.preventDefault();

			var arrow = $(this);

			if (!arrow.hasClass('animate')) {
				arrow.addClass('animate');
				setTimeout(() => {
					arrow.removeClass('animate');
				}, 1600);
			}

		});
		jQuery('.favorites-slider').slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 300,
			autoplay: false,
			slidesToShow: 4,
			slidesToScroll: 1,		
			
			nextArrow: '<a href="#" class="slick-arrow slick-next"><i class= "fa fa-chevron-right"></i></a>',
			prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class= "fa fa-chevron-left"></i></a>',
			responsive: [
			{
				breakpoint: 1200,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
			]
		});

		jQuery('#top-ten-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '#top-ten-slider-nav',
			responsive: [
			{
				breakpoint: 992,
				settings: {
				asNavFor: false,
				arrows: true,
				nextArrow: '<button class="NextArrow"><i class="ri-arrow-right-s-line"></i></button>',
				prevArrow: '<button class="PreArrow"><i class="ri-arrow-left-s-line"></i></button>',
				}
			}
			]
		});
		jQuery('#top-ten-slider-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '#top-ten-slider',
			dots: false,
			arrows: true,
			infinite: true,
			vertical:true,
			verticalSwiping: true,
			centerMode: false,
			nextArrow:'<button class="NextArrow"><i class="ri-arrow-down-s-line"></i></button>',
			prevArrow:'<button class="PreArrow"><i class="ri-arrow-up-s-line"></i></button>',
			focusOnSelect: true,
			responsive: [		    
				{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
				},
				{
					breakpoint: 600,
					settings: {
						asNavFor: false,
					}
				},
			]
		});

		jQuery('#episodes-slider2').slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 300,
			autoplay: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
			]
		});

		jQuery('#episodes-slider3').slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 300,
			autoplay: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
			]
		});

		jQuery('#trending-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,		 
			arrows: false,
			fade: true,
			draggable:false,
			asNavFor: '#trending-slider-nav',	
		});
		jQuery('#trending-slider-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '#trending-slider',
			dots: false,
			arrows: true,
			nextArrow: '<a href="#" class="slick-arrow slick-next"><i class= "fa fa-chevron-right"></i></a>',
			prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class= "fa fa-chevron-left"></i></a>',
			infinite: true,
			centerMode: true,
			centerPadding:0,
			focusOnSelect: true,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
			]
		});
		
		jQuery('#tvshows-slider').slick({
			centerMode: true,
			centerPadding: '200px',
			slidesToShow: 1,
			nextArrow: '<button class="NextArrow"><i class="ri-arrow-right-s-line"></i></button>',
			prevArrow: '<button class="PreArrow"><i class="ri-arrow-left-s-line"></i></button>',
			arrows:true,
			dots:false,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '20px',
						slidesToShow: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '20px',
						slidesToShow: 1
					}
				}
			]
		});

		/*---------------------------------------------------------------------
			Owl Carousel
		----------------------------------------------------------------------- */
		jQuery('.episodes-slider1').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
			dots:false,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:4
				}
			}
		});
	});
})(jQuery);