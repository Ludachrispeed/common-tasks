const gulp = require('gulp');
const watch = require('gulp-watch');

/**
 * Copy all HTML files into the dist/ directory. The file structure must be maintained in the copy.
 */
gulp.task('html', () => {
  gulp.src('app/**/*.html', {base: 'app/'})
    .pipe(gulp.dest('dist/'));
});

/**
 * Whenever an html file in the app/ folder changes, copy the new html file to the dist/ folder
 */
gulp.task('html:watch', () => {
  watch('app/**/*.html')
    .pipe(gulp.dest('dist/'));
});
