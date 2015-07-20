'use strict';

var config = require('../config'),
	gulp   = require('gulp'),
	tar	   = require('gulp-tar'),
	gzip   = require('gulp-gzip');

gulp.task('gzip', function() {
	return gulp.src(config.gzip.src)
		.pipe(tar('index.tar'))
		.pipe(gzip(config.gzip.options))
		.pipe(gulp.dest(config.gzip.dest));
});
