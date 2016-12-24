const gulp = require('gulp');
const runSequence = require('run-sequence');

/**
 * Run the asset pipeline for development. This processes necessary files and copies them to the
 * dest/ folder, but does not perform any minification.
 */
gulp.task('dev', cb => {
  runSequence(
    'clean',
    'setenv:dev',
    ['js:dev', 'js:bowerFiles', 'styles:dev', 'html', 'images'],
    cb);
});
