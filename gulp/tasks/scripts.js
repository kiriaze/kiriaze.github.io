'use strict';

var config     		= require('../config'),
	gulp       		= require('gulp'),
	// gulp-load-plugins will only load plugins prefixed with gulp
	plugins			= require('gulp-load-plugins')(),
	browserSync     = require('browser-sync'),
	mainBowerFiles  = require('main-bower-files');

// minify, concat, uglify, sourcemap, rename JS
gulp.task('js', function(){

	var files = mainBowerFiles('**/*.js');
	console.log('js bower files: ', files);

    files.push(config.scripts.src);

	return gulp.src(files)
		.pipe(plugins.sourcemaps.init())
			.pipe(plugins.order(config.scripts.order))
			.pipe(plugins.uglify())
			.pipe(plugins.concat('app.js'))
			.pipe(plugins.rename({suffix: '.min'}))
		.pipe(plugins.sourcemaps.write('./')) // writing relative to gulp.dest path
		.pipe(gulp.dest(config.scripts.dest))
		.pipe(browserSync.reload({stream:true}))
		.on('error', plugins.util.log)
});
