// use gulp first, then run gulp prod for quick min/uncss/gzip

'use strict';

var gulp        = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('prod', function(cb) {

	cb = cb || function() {};

	global.isProd = true;

	runSequence(
		'html',
		'uncss',
		'gzip',
		'info',
		cb
	);

});
