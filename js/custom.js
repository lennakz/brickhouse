$(document).ready(function () {

	$(".nav-item a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {

				window.location.hash = hash;
			});
		}
	});

	$(window).on('scroll', function() {
		if ($('body').scrollTop > 100 || document.documentElement.scrollTop > 100) {
			$('#scroll-to-top').css('display', 'block');
		} else {
			$('#scroll-to-top').css('display', 'none');
		}
	});

	// $('#scroll-to-top').on('click', function() {
	// 	$('html, body').animate({
	// 		scrollTop: 0
	// 		}, 800
	// 	);
	// });
});
