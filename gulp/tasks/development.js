'use strict';

var gulp        = require('gulp'),
	runSequence = require('run-sequence');

// wait for clean and browser-sync before running sequence
gulp.task('default', function() {
	runSequence(
		'clean',
		'css',
		'jekyll',
		'js',
		'images',
		'video',
		'fonts',
		'browser-sync',
		'watch',
		'sitemap',
		'info'
	);
});
