'use strict';

var config        = require('../config'),
	gulp          = require('gulp'),
	browserSync   = require('browser-sync'),
	path          = require('path'),
	reload        = browserSync.reload;

// Watch these files for changes and run the task on update
gulp.task('watch', function() {

	// Watch Sass files
	gulp.watch(config.styles.src + '/**/*.scss', ['css']);

	// Watch JS files
	gulp.watch(config.scripts.src, ['js']);

	// Watch image files
	gulp.watch(config.images.src, ['images'], reload);

	// jekyll build
	gulp.watch([
		config.src.root + '/**/*.html',
		config.src.root + '/**/*.md'
	], ['jekyll-rebuild'], reload);

});
