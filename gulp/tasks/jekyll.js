'use strict';

var config 		  = require('../config'),
	gulp          = require('gulp'),
	cp            = require('child_process'),
	browserSync   = require('browser-sync'),
	htmlmin		  = require('gulp-htmlmin');

gulp.task('jekyll', function (done) {
	return cp.spawn('jekyll', [
		'build'
	], {stdio: 'inherit'})
		.on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll'], function () {
	browserSync.reload();
});

// gulp.task('html', ['jekyll'], function() {
gulp.task('html', function() {
    return gulp.src(config.dist.root + '/**/*.html')
        .pipe(htmlmin({
        	collapseWhitespace: true,
            removeComments: true,
            conservativeCollapse: true,
            collapseBooleanAttributes: true,
            removeRedundantAttributes: true,
            minifyJS: true,
            minifyCSS: true
        }))
        .pipe(gulp.dest(config.dist.root))
});
