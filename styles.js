var gulp = require('gulp');
var size = require('gulp-size');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var cleanCss = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

/**
 * Copy app.css to dist/ without any minification
 */
gulp.task('styles:dev', ['styles:scss'], () => {
  gulp.src('app/styles/app.css')
    .pipe(gulp.dest('dist/css/'));
});

/**
 * Miniy app.css (which was created in the styles:scss task). Copy the result to dist/.
 */
gulp.task('styles:prod', ['styles:scss'], () => {
  gulp.src('app/styles/app.css')
    .pipe(size({
      showFiles: true,
      title: 'size of initial css'
    }))
    .pipe(cleanCss({processImport: false}))
    .pipe(size({
      showFiles: true,
      title: 'size of css after minify'
    }))
    .pipe(gulp.dest('dist/css/'));
});

/**
 * Compile app.scss into a CSS file. This is a synchronous task (using the "return a stream"
 * paradigm) so that it will finish before "styles:dev" or "styles:prod" attempt to copy the
 * generated CSS.
 */
gulp.task('styles:scss', () => {
  return gulp.src('app/styles/app.scss')
    .pipe(size({
      showFiles: true,
      title: 'initial scss files'
    }))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(sourcemaps.write())
    .pipe(size({
      showFiles: true,
      title: 'compiled css files with sourcemaps'
    }))
    .pipe(gulp.dest('app/styles/'));
});

/**
 * Watch for changes to our SCSS files. If an SCSS file changes, run the 'styles:dev' task again.
 */
gulp.task('styles:watch', () => {
  gulp.watch('app/styles/**/*.scss', ['styles:dev']);
});
