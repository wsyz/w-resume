'use strict';

const gulp = require('gulp4');
const fileinclude = require('gulp-file-include');

const conf = require('./config');
const c_paths = conf.paths;
const c_folders = conf.folders;

function views(){
	return gulp.src(
			[
				c_paths.src +'/**/*.html'
			]
		)
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest(c_paths.tmp))
}

module.exports = views;