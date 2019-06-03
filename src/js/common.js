import $ from "jquery"
// import is from "is_js"
// import "selectize/dist/js/selectize.min.js"
// import "slick-carousel"
// import Swiper from "swiper/dist/js/swiper.js";

// import "./tabs.js"
// import "./forms.js"



window.$ = $;
window.jQuery = $;

// require("./countTo.js");
// require("./countTo.js");
// require("./jquery.fancybox.js")
// require("./jquery.menu-aim.js")

// require("swiper/dist/css/swiper.min.css")
// require("slick-carousel/slick/slick.css")
// if (!is.touchDevice())
// 	require("selectize/dist/css/selectize.css")
// require("../css/jquery.fancybox.css")



document.addEventListener("DOMContentLoaded", e => {

	$(document).scroll(function() {
		var $nav = $(".fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});

	$('.burger').click(function(){
		$('body').toggleClass('js__menu--open')
	})


	var mobileMenu = $('.navbar-nav').clone();

	$('.mobile-menu').append(mobileMenu);



})

