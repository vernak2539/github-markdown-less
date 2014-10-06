'use strict';

var gulp   = require( 'gulp' );
var less   = require( 'gulp-less' );
var rename = require( 'gulp-rename' );

var files = [ './github-markdown.less' ];

gulp.task( 'default', [ 'less' ] );

gulp.task( 'watch', function() {
	gulp.watch( files, [ 'less' ] );
});

gulp.task( 'less', function() {
	return gulp.src( files )
		.pipe( less() )
		.pipe( gulp.dest( './' ) )
		.pipe( less({
			compress: true
		}))
		.pipe( rename({
			extname: '.min.css'
		}))
		.pipe( gulp.dest( './' ) );
});
