(function($){

	/* jshint devel:true */
	'use strict';

	window.THEMENAME = {};

	var SHORTNAME    = window.THEMENAME;

	var $window      = $(window),
		$body        = $(document.body),
		$html        = $(document.documentElement);

	SHORTNAME.init = function(){

		SHORTNAME.setElements();
		SHORTNAME.colors();
		SHORTNAME.basics();
		SHORTNAME.nav();
		// SHORTNAME.instagram();
		SHORTNAME.dribbble();

	};

	SHORTNAME.setElements = function(){
		SHORTNAME.elems             = {};

		// defaults
		SHORTNAME.elems.html        =	$('html');
		SHORTNAME.elems.body        =	$('body');
		SHORTNAME.elems.main        =	$('#main');
		SHORTNAME.elems.header      =	$('#header');
		SHORTNAME.elems.footer      =	$('#footer');
		SHORTNAME.elems.scrollToTop =	$('a[data-scroll-to="top"]');

	};

	SHORTNAME.colors = function() {
		var colors = {
			aqua    : '#7FDBFF',
			blue    : '#0074D9',
			lime    : '#01FF70',
			navy    : '#001F3F',
			teal    : '#39CCCC',
			olive   : '#3D9970',
			green   : '#2ECC40',
			red     : '#FF4136',
			maroon  : '#85144B',
			orange  : '#FF851B',
			purple  : '#B10DC9',
			yellow  : '#FFDC00',
			fuchsia : '#F012BE',
			gray    : '#aaa',
			white   : '#fff',
			black   : '#111',
			silver  : '#ddd'
		};
		// console.log(colors);
		// console.log(colors.blue);
	};

	SHORTNAME.basics = function() {

		// Fastclick.js - Polyfill to remove click delays on browsers with touch UIs
		$(function() {
			window.FastClick.attach(document.body);
		});

		// SimpleAnchors
		$.simpleAnchors({
			offset: -1, // 80-1, header height on scroll
			easing: 'easeInOutCubic'
		});

		// alternate header colors for bg on scroll
		SHORTNAME.elems.header.midnight();
		SHORTNAME.elems.header.headroom({
			classes : {
				// when element is initialised
				initial : "headroom",
				// when scrolling up
				pinned : "header-pinned",
				// when scrolling down
				unpinned : "header-unpinned",
				// when above offset
				top : "header-top",
				// when below offset
				notTop : "header-not-top"
			}
		});

		// split columns equal height, valign
		SHORTNAME.elems.main.find('.split-content .columns-50').matchHeight();

		// // post list
		// SHORTNAME.elems.main.find('.post-list .post').matchHeight();

		// wow
		SHORTNAME.elems.main.find('.post-content .container > *, img, h6, h5, h4, h3, h2, p, span, .btn').addClass('wow fadeIn');

		// shoutouts
		console.log('psst..i give a shit. =)');

		// wow
		new WOW().init({
			offset: Math.min($(window).height() * 0.1, 80)
		});

		// randomly display one of the home page hero intro versions
		var random = Math.floor(Math.random() * SHORTNAME.elems.main.find('.random').length);
		SHORTNAME.elems.main.find('.random').eq(random).show();

		// $('[data-preload-bg]').each(function(){
		// 	var $holder = $(this)
		// 	var src = $holder.data('preload-bg');
		// 	$holder.css('background-image', 'url("'+ src +'")');
		// });

	};

	SHORTNAME.instagram = function() {

		var	user_id = '24765686', //userid
			num_to_display = '20', //instagram limits to max 20, but you can do less for your layout.
			access_token = '695497474.45e59c8.a618fb95f14947b08d2137fd66797bbd';

		$.ajax({
			type: 'GET',
			dataType: 'jsonp',
			cache: false,
			url: 'https://api.instagram.com/v1/users/'+user_id+'/media/recent/?access_token='+access_token,
			success: function(data) {
				for (var i = 0; i < num_to_display; i++) {
					// console.log(data.data[i].caption.text);
					$('.instagram-feed').append('<li class="instagram-item"><a target="_blank" href="' + data.data[i].link +'" class="instagram-image overlay block" style="background-image: url('+data.data[i].images.low_resolution.url+')"><div class="content"><h5>' + data.data[i].caption.text + '</h5></div></a></li>');
				}
			}
		});

	};

	SHORTNAME.dribbble = function() {

		$.getJSON("http://dribbble.com/kiriaze/shots.json?callback=?", function(data){
			$.each(data.shots, function(i,shot){
				// console.log(shot);
				$('.dribbble-feed').append('<li class="dribbble-item"><a target="_blank" href="' + shot.url +'" class="dribbble-image overlay block" style="background-image: url('+ shot.image_teaser_url +')"><div class="content"><h5>' + shot.title + '</h5></div></a></li>');
			});
		});

	};

	SHORTNAME.nav = function() {
		// nav reveal
		SHORTNAME.elems.main.on('click', '.nav-trigger', function() {
			$('.menu-overlay, #header, body').toggleClass('nav-open');
		});

		$('a:not([href*="#"],[href*="javascript:;"])').on('click', function(e){
			e.preventDefault();
			SHORTNAME.elems.body.toggleClass('fadeOut');
			var url = $(this).attr('href');
			setTimeout(function() {
				window.location.href = url;
			}, 100);
		});
	};

	$window.load(function() {

		SHORTNAME.elems.header.css('visibility', 'visible');

		var elements = $( '.giflinks' );
		if ( elements.length ) {
			GifLinks( elements );
		}

	});

	$window.resize(function(event) {

	});

	$(document).ready(function(){

		SHORTNAME.init();

	});

})(window.jQuery);
