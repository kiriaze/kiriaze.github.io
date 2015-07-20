'use strict';

var gulp          = require('gulp'),
	cp            = require('child_process'),
	browserSync   = require('browser-sync')

gulp.task('jekyll', function (done) {
	return cp.spawn('jekyll', [
		'build'
	], {stdio: 'inherit'})
		.on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll'], function () {
	browserSync.reload();
});
