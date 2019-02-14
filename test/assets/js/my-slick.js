$('.online-game').slick({
	dots: true,
	infinite: true,
	slidesToShow: 1,
	rows: 2,
	slidesPerRow: 3,
	slidesToScroll: 1,
	arrows: true,
	appendArrows: $('.for-nav'),
	appendDots: $('.for-nav'),

	responsive: [{
			breakpoint: 768,
			settings: {
				dots: true,
				infinite: true,
				slidesToShow: 1,
				rows: 2,
				slidesPerRow: 2,
				slidesToScroll: 1,
				arrows: true,
			},
		},
		{
			breakpoint: 480,
			settings: {
				dots: true,
				infinite: true,
				rows: 1,
				slidesPerRow: 1,
				slidesToScroll: 1,
				slidesToShow: 1,
				arrows: true,
			},
		},
	],
});