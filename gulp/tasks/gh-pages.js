var config  = require('../config'),
	gulp 	= require('gulp'),
	ghPages = require('gulp-gh-pages');

gulp.task('gh-pages', function() {
	return gulp.src(config.dist.root + '/**/*')
		.pipe(ghPages());
});
