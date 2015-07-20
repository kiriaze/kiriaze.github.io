'use strict';

var config         = require('../config'),
	gulp           = require('gulp'),
	// gulp-load-plugins will only load plugins prefixed with gulp
	plugins		   = require('gulp-load-plugins')(),
	mainBowerFiles = require('main-bower-files'),
	browserSync    = require('browser-sync');

gulp.task('fonts', function() {

	var files = mainBowerFiles('**/*.{eot,svg,ttf,woff,woff2}');
	console.log('font bower files: ', files);

    files.push(config.fonts.src + '/**/*');

	return gulp.src(files)
		.pipe(plugins.changed(config.fonts.dest)) // Ignore unchanged files
		.pipe(plugins.filter('**/*.{eot,svg,ttf,woff,woff2}'))
		.pipe(plugins.flatten())
		.pipe(gulp.dest(config.fonts.dest))
		.pipe(plugins.if(browserSync.active, browserSync.reload({ stream: true, once: true })));
});
