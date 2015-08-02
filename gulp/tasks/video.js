'use strict';

var config         = require('../config'),
	gulp           = require('gulp'),
	// gulp-load-plugins will only load plugins prefixed with gulp
	plugins		   = require('gulp-load-plugins')(),
	browserSync    = require('browser-sync');

gulp.task('video', function() {
	return gulp.src(config.video.src)
		.pipe(gulp.dest(config.video.dest))
		.pipe(browserSync.reload({stream:true}))
});
