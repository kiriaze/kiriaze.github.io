'use strict';

var config      = require('../config'),
	gulp        = require('gulp'),
	uncss		= require('gulp-uncss'),
	csso        = require('gulp-csso');

// use regex for ignoring classes
// that are being added dynamically to css
// or write this comment above your desired css
// /* uncss:ignore */
var uncssIgnoreClass = config.uncss.ignore;

gulp.task('uncss', function() {
    return gulp.src(config.dist.root + '/assets/css/*.css')
		.pipe(uncss({
			html: [config.dist.root + '/**/*.html'],
			ignore: uncssIgnoreClass,
			ignoreSheets: [/fonts.googleapis/]
		}))
		.pipe(csso()) // re compress after uncss
        .pipe( gulp.dest(config.src.root + '/_includes') ) // placed in _includes dir for @include in head.html
});
