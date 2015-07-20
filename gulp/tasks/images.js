'use strict';

var config       = require('../config'),
	changed      = require('gulp-changed'),
	gulp         = require('gulp'),
	gulpif       = require('gulp-if'),
	imagemin     = require('gulp-imagemin'),
	pngquant     = require('imagemin-pngquant'),
	jpegtran     = require('imagemin-jpegtran'),
	gifsicle     = require('imagemin-gifsicle'),
	optipng      = require('imagemin-optipng'),
	svgo		 = require('imagemin-svgo'),
	browserSync  = require('browser-sync');

// Image tasks
gulp.task('images', function() {
	return gulp.src(config.images.src)
		.pipe(changed(config.images.dest)) // Ignore unchanged files
		.pipe(gulpif(global.isProd, imagemin())) // Optimize
		.pipe(gulp.dest(config.images.dest))
		.pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));
});
