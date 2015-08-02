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

		// post list
		SHORTNAME.elems.main.find('.post-list .post').matchHeight();

		// wow
		SHORTNAME.elems.main.find('.post-content .container > *, img, h6, h5, h4, h3, h2, p, .btn').addClass('wow fadeIn');

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
