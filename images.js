const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('images', () => {
  gulp.src('app/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/'));
});

// whenever anything in the images folder changes, rerun the images task
gulp.task('images:watch', () => {
  gulp.watch('app/images/**/*', ['images']);
});
