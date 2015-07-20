'use strict';

var gulp        = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('prod', ['clean', 'browser-sync'], function(cb) {

	cb = cb || function() {};

	global.isProd = true;

	runSequence(
		// 'uncss', // currently disabled due to lack of dynamically generated classes through js, too many to manually upkeep in ignore array
		'js',
		'images',
		'fonts',
		'sitemap',
		'gzip',
		'info',
		cb
	);

});
