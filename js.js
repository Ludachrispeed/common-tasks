'use strict';

var gulp = require('gulp');
var size = require('gulp-size');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var mainBowerFiles = require('main-bower-files');

/**
 * Include sourcemaps, no minification.
 */
gulp.task('js:dev', function() {
  return gulp.src(['app/**/*.js', '!**/*_test.js', '!**/*_mocks.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(size({
      showFiles: true,
      title: 'js:dev after concat and sourcemaps:'
    }))
    .pipe(gulp.dest('dist/'));
});

/**
 * Do minification, no sourcemaps.
 */
gulp.task('js:prod', function() {
  gulp.src(['app/**/*.js', '!**/*_test.js', '!**/*_mocks.js'])
    .pipe(concat('app.js'))
    .pipe(size({
      showFiles: true,
      title: 'js:prod after concat:'
    }))
    .pipe(ngAnnotate())
    .pipe(size({
      showFiles: true,
      title: 'js:prod after annotate:'
    }))
    .pipe(uglify())
    .pipe(size({
      showFiles: true,
      title: 'js:prod after uglify:'
    }))
    .pipe(gulp.dest('dist/'));
});

/**
 * Gather all js files that we're including with bower, concatenate them, and put them in our dist/
 * directory.
 *
 * Note: no need to do minification. Instead, use the "overrides" in bower.json to use the
 * vendor-provided minified version when NODE_ENV is set to "production". For example, see
 * https://github.com/Ludachrispeed/angular1-starter/blob/master/bower.json
 */
gulp.task('js:bowerFiles', function() {
  gulp.src(mainBowerFiles())
    .pipe(size({
      showFiles: true,
      title: 'bowerFiles before concat:'
    }))
    .pipe(concat('bowerFiles.js'))
    .pipe(gulp.dest('dist/'))
    .pipe(size({
      showFiles: true,
      title: 'bowerFiles after concat:'
    }));
});

gulp.task('js:watch', function() {
  gulp.watch('app/**/*.js', ['js:dev']);
});
