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

		if ( window.back_to_top ) {
			$window.scroll(function(){
				if ( $(this).scrollTop() > 300 ) {
					SHORTNAME.elems.scrollToTop.addClass('fadeIn');
				} else {
					SHORTNAME.elems.scrollToTop.removeClass('fadeIn');
				}
			});
		}

		// Fastclick.js - Polyfill to remove click delays on browsers with touch UIs
		$(function() {
			window.FastClick.attach(document.body);
		});

		// SimpleAnchors
		$.simpleAnchors({
			offset: -1, // 80-1, header height on scroll
			easing: 'easeInOutCubic'
		});

		// work titles hover
		SHORTNAME.elems.main.on({
			mouseenter: function () {
				$('.work-title-list a').not($(this)).addClass('hover');
			},
			mouseleave: function () {
				$('.work-title-list a').not($(this)).removeClass('hover');
			}
		},'.work-title-list a.completed');

		// alternate header colors for bg on scroll
		SHORTNAME.elems.main.find('#header').midnight();

		// split columns equal height, valign
		SHORTNAME.elems.main.find('.split-content .columns-50').matchHeight();

		// post list
		SHORTNAME.elems.main.find('.post-list .post').matchHeight();

		// attach scrollReveals to each paragraph
		SHORTNAME.elems.main.find('.post-content p').attr('data-sr', 'enter bottom');

		// shoutouts
		console.log('psst..i give a shit. =)');

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

	SHORTNAME.ajax = function() {

		/* ============================================================ */
		/* Ajax Loading */
		/* ============================================================ */

		var History = window.History,
			loading        = false,
			showIndex      = false,
			$ajaxContainer = $('#ajax-container'),
			$latestPost    = $('#latest-post'),
			$postIndex     = $('#post-index');

		// Initially hide the index and show the latest post
		$latestPost.show();
		$postIndex.hide();

		// Show the index if the url has "page" in it (a simple
		// way of checking if we're on a paginated page.)
		if ( window.location.pathname.indexOf('page') === 1 || window.location.pathname.indexOf('tag') === 1 ) {
			$latestPost.hide();
			$postIndex.show();
		}

		// Check if history is enabled for the browser
		if ( ! History.enabled) {
			return false;
		}

		History.Adapter.bind(window, 'statechange', function() {

			var State = History.getState();

			// Get the requested url and replace the current content
			// with the loaded content
			$.get( State.url, function(result) {

				var $html = $(result);
				var $newContent = $('#ajax-container', $html).contents();

				// Set the title to the requested urls document title
				document.title = $html.filter('title').text();

				$ajaxContainer.fadeOut(500, function() {

					$('html, body').animate({'scrollTop': 0});

					$latestPost = $newContent.filter('#latest-post');
					$postIndex = $newContent.filter('#post-index');

					if ( showIndex === true ) {
						$latestPost.hide();
					} else {
						$latestPost.show();
						$postIndex.hide();
					}

					// $newContent.fitVids();

					$ajaxContainer.html($newContent).promise().done(function(){

						// Re run any other js here that targets dynamic content
						$('#header').midnight();

						SHORTNAME.medium();

						// setTimeout(function() {
						// 	$.fn.matchHeight._apply('.split-content .columns-50');
						// }, 300);

						sr.init();

						$ajaxContainer.fadeIn(500);

					});

					NProgress.done();

					loading = false;
					showIndex = false;

				});

			}).fail(function() {
				// Request fail
				NProgress.done();
				location.reload();
			});

		});

		$('body').on('click', '.js-ajax-link, .pagination a', function(e) {

			e.preventDefault();

			if ( loading === false ) {

				var currentState = History.getState(),
					url   = $(this).attr('href'),
					title = $(this).attr('title') || null;

				// If the requested url is not the current states url push
				// the new state and make the ajax call.
				// and that the same page link isnt pushed
				if ( url !== currentState.url.replace(/\/$/, "") && url !== currentState.hash ) {

					loading = true;

					// Check if we need to show the post index after we've
					// loaded the new content
					if ( $(this).hasClass('js-show-index') || $(this).parent('.pagination').length > 0 ) {
						showIndex = true;
					}

					NProgress.start();

					History.pushState({}, title, url);

				}

			}

		});

	};

	$window.load(function() {
		// scrollReveal
		var config = {
			// reset: true
		};
		window.sr = new scrollReveal(config);

		SHORTNAME.elems.body.addClass('fadeIn');
	});

	$window.resize(function(event) {

	});

	$(document).ready(function(){

		SHORTNAME.init();
		// SHORTNAME.ajax();

	});

})(window.jQuery);
