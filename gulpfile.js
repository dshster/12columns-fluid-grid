/* global require, console */
'use strict';

var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    rename = require('gulp-rename'),
    filesize = require('gulp-filesize'),
    autoprefixer = require('autoprefixer-stylus'),
    csso = require('csso-stylus');

gulp.task('stylus', function() {
	gulp.src('styles/12grid.styl')
	.pipe(stylus({
		use: [
			autoprefixer('last 2 versions', 'ie 10', 'opera 12'),
			csso()
		]
	}))
	.on('error', console.log)
	.pipe(rename('12grid.min.css'))
	.pipe(filesize())
	.pipe(gulp.dest('styles/compile/'));
});

gulp.task('watch', function() {
	var watcher = gulp.watch('styles/*.styl', ['stylus']);

	watcher.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});

gulp.task('default', ['stylus']);
