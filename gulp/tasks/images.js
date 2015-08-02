'use strict';

var config       = require('../config'),
	changed      = require('gulp-changed'),
	gulp         = require('gulp'),
	imagemin     = require('gulp-imagemin'),
	browserSync  = require('browser-sync');

// Image tasks
gulp.task('images', function() {
	return gulp.src(config.images.src)
		.pipe(changed(config.images.dest)) // Ignore unchanged files
		.pipe(imagemin({
			progressive: true,
      		interlaced: true
		})) // Optimize
		.pipe(gulp.dest(config.images.dest))
		.pipe(browserSync.reload({stream:true}))
});
