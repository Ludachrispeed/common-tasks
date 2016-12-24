const gulp = require('gulp');
const runSequence = require('run-sequence');

/**
 * Run the asset pipeline for development. This processes necessary files and copies them to the
 * dest/ folder, but does not perform any minification.
 */
gulp.task('prod', cb => {
  // run the following gulp tasks in order
  runSequence(
    'clean',
    'setenv:prod',
    ['js:prod', 'js:bowerFiles', 'styles:prod', 'html', 'images'],
    cb);
});
