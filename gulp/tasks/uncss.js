'use strict';

var config      = require('../config'),
	gulp        = require('gulp'),
	uncss		= require('gulp-uncss');

// use regex for ignoring classes
// that are being added dynamically to css
// or write this comment above your desired css
// /* uncss:ignore */
var uncssIgnoreClass = [config.uncss.ignore];

gulp.task('uncss', function() {
    return gulp.src(config.dist.root + '/assets/css/*.css')
		.pipe(uncss({
			html: [config.dist.root + '/**/*.html'],
			ignore: uncssIgnoreClass
		}))
        .pipe( gulp.dest(config.dist.root + '/assets/css') )
});
