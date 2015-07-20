'use strict';

var gulp 	= require('gulp'),
	rsync	= require('gulp-rsync');

gulp.task('deploy', ['prod'], function() {

	return gulp.src(['./src/**'])
		.pipe(rsync({
			root: './src',
			hostname: '',
			username: '',
			password: '',
			destination: 'public_html',
			incremental: true,
			exclude: []
		}));

});
