'use strict';

var gulp = require('gulp');

gulp.task('images', function() {
  gulp.src('app/images/**/*')
    .pipe(gulp.dest('dist/images/'));
});

// whenever anything in the images folder changes, rerun the images task
gulp.task('images:watch', function() {
  gulp.watch('app/images/**/*', ['images']);
});
