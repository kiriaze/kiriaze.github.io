var config      = require('../config'),
	gulp        = require('gulp'),
	sitemap 	= require('gulp-sitemap');

gulp.task('sitemap', function () {
    gulp.src(config.dist.root + '/**/*.html')
        .pipe(sitemap({
            siteUrl: config.URL
        }))
        .pipe(gulp.dest(config.dist.root));
});
