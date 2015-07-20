'use strict';

var gulp        = require('gulp'),
	runSequence = require('run-sequence');

// wait for clean and browser-sync before running sequence
gulp.task('default', ['clean', 'browser-sync'], function() {
	runSequence(
		// 'uncss', // currently disabled due to lack of dynamically generated classes through js, too many to manually upkeep in ignore array
		'js',
		'images',
		'fonts',
		'watch',
		'sitemap',
		'info'
	);
});
