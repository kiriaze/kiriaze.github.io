'use strict';

module.exports = {

	'serverport': 3000,

	// URL TO YOUR SITEMAP.XML
	'sitemapURL': 'http://kiriaze.com/sitemap.xml',

	// Google pagespeed
	'URL'       : 'http://kiriaze.com',
	'strategy'  : 'mobile',

	// gh-pages default pushes to gh-pages branch.
	// remoteUrl: '', By default gulp-gh-pages assumes the current working directory is a git repository and uses its remote url. If your gulpfile.js is not in a git repository, or if you want to push to a different remote url ( username.github.io ), you can specify it. Ensure you have write access to the repository.
	// branch by default is gh-pages. set to master for username.github.io
	// set source to what dir you want to push to github
	'githubPages': {
		'remoteUrl'	: 'git@github.com:kiriaze/kiriaze.github.io.git',
		'branch'	: 'master',
		'source'	: ''
	},

	// gulp deploy
	// set options here
	'hostname': '',
	'username': '',
	'password': '',
	'destination': 'public_html',
	'exclude': [],

	'styles': {
		'src' : 'src/assets/scss',
		'dest': 'dist/assets/css'
	},

	'scripts': {
		'src' : 'src/assets/js/**/*.js',
		'dest': 'dist/assets/js',
		'order': [
			'**/**/modernizr.js',
			'**/**/jquery.js',
			'**/**/*.js'
		]
	},

	'vendorjs': 'src/assets/js/vendor/**/*.js',

	'images': {
		'src' : 'src/assets/images/**/*.{png,jpg,jpeg,gif,svg,ico}',
		'dest': 'dist/assets/images'
	},

	'video': {
		'src' : 'src/assets/video/**/*',
		'dest': 'dist/assets/video'
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
			'#search-input',
			'#results-container'
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
