const gulp = require('gulp');
const size = require('gulp-size');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const ngAnnotate = require('gulp-ng-annotate');
const mainBowerFiles = require('main-bower-files');

/**
 * Include sourcemaps, no minification.
 */
gulp.task('js:dev', () => {
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
gulp.task('js:prod', () => {
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
gulp.task('js:bowerFiles', () => {
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

gulp.task('js:watch', () => {
  gulp.watch('app/**/*.js', ['js:dev']);
});
