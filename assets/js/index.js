// PRELOADER
$(document).ready(function() {  
    setTimeout(function(){
        $('#body').addClass('loaded')
    }, 2920);
});

// NAVBAR
window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");
var title = document.getElementById("title");
var sticky = 750; // navbar.offsetTop

function stickyNavbar() {
	if (window.pageYOffset > sticky && screen.width > 768) {
		navbar.classList.add("navbar-sticky")
		navbar.classList.remove("navbar-default")
		//title.classList.add("navbar-js")

		if (window.pageYOffset > 0 && window.pageYOffset < 800){
			$('.list-menu li a').removeClass('active');
			$('.list-menu li .landing').addClass('active');
		} else if (window.pageYOffset > 800 && window.pageYOffset < 1300) {
			$('.list-menu li a').removeClass('active');
			$('.list-menu li .about').addClass('active');
		} else if (window.pageYOffset > 1300 && window.pageYOffset < 2200) {
			$('.list-menu li a').removeClass('active');
			$('.list-menu li .services').addClass('active');
		} else if (window.pageYOffset > 2200 && window.pageYOffset < 3100) {
			$('.list-menu li a').removeClass('active');
			$('.list-menu li .gallery').addClass('active');
		} else if (window.pageYOffset > 3100 && window.pageYOffset < 3400) {
			$('.list-menu li a').removeClass('active');
			$('.list-menu li .contact').addClass('active');
		} else {
			$('.list-menu li a').removeClass('active');
			$('.list-menu li .landing').addClass('active');
		}

	} else {
	navbar.classList.remove("navbar-sticky")
	navbar.classList.add("navbar-default")
	//title.classList.remove("navbar-js");
	}
}

// NAVBAR LINK ROUTER
$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]').click(function(event) {
		if (
		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		&& 
		location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						var $target = $(target);
						$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
});

// SERVICES SECTION BLOCK ACTIVE CLASS
$(".block").mouseover(function(){
	this.classList.add('active');
}).mouseout(function(){
	this.classList.remove('active');
});

// HAMBURGER IS-ACTIVE
var btn = document.getElementById("trigger");
var menu = document.getElementById("MobileMenu");

btn.addEventListener('click', function(){
	$("#hamburger").toggleClass('is-active');
});

// SLICK SLIDER CONFIG
$(document).ready(function(){ // GALLERY
	$('.gallery-slider').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});
});

// BACK TO TOP
$(document).ready(function(){
	$(function toTop() {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 600) {
				$('.bt-top').css({"opacity": "1"});
			} else {
				$('.bt-top').css({"opacity": "0"});
			}
		});

		$('.bt-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1200);
			return false;
		});
	});			
});