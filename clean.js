var gulp = require('gulp');
var del = require('del');

gulp.task('clean', cb => {
  del('dist/**')
    .then(paths => {
      console.log(`${paths.length} files deleted`);
      cb();
    });
});
