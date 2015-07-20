'use strict';

module.exports = {

	'serverport': 3000,

	// URL TO YOUR SITEMAP.XML
	'sitemapURL': 'http://kiriaze.com/sitemap.xml',

	// Google pagespeed
	'URL'       : 'http://kiriaze.com',
	'strategy'  : 'mobile',

	// gh-pages default pushes to gh-pages branch.
	// options ex. below for user pages deploy
	// remoteUrl: https://github.com/kiriaze/kiriaze.github.io.git
	// branch: master
	'remoteUrl'	: 'https://github.com/kiriaze/kiriaze.github.io.git',
    'branch'	: 'master',

	'styles': {
		'src' : 'src/assets/scss',
		'dest': 'dist/assets/css'
	},

	'scripts': {
		'src' : 'src/assets/js/**/*.js',
		'dest': 'dist/assets/js'
	},

	'vendorjs': 'src/assets/js/vendor/**/*.js',

	'images': {
		'src' : 'src/assets/images/**/*.{png,jpg,jpeg,gif,svg,ico}',
		'dest': 'dist/assets/images'
	},

	'fonts': {
		'src' : 'src/assets/fonts/**/*',
		'dest': 'dist/assets/fonts'
	},

	'gzip': {
		'src': 'src/**/*.{html,xml,json,css,js,js.map}',
		'dest': 'dist/',
		'options': {

		}
	},

	'uncss': {
		'ignore' : [
			'/.class-1.class-2/',
			'/.class-3.class-2/'
		]
	},

	'jekyll': {
		'development': {
			'src':    'src',
			'dest':   'dist',
			'config': '_config.yml'
		}
	},

	'src' : {
		'root' : 'src'
	},

	'dist': {
		'root'  : 'dist'
	}

};
