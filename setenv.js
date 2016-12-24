const gulp = require('gulp');

/*
 * Set the NODE_ENV environment variable to 'development' or 'production'. This will only affect the
 * process.env object in node (which just contains a list of the host OS's environment
 * variables). It will not actually set a environment variable on the host operating system.
 *
 * Also note, NODE_ENV is used by 'main-bower-files' to use different files for development and
 * production.
 */

gulp.task('setenv:prod', function() {
  console.log('\tsetting NODE_ENV to "production"');
  process.env.NODE_ENV = 'production';
});

gulp.task('setenv:dev', function() {
  console.log('\tsetting NODE_ENV to "development"');
  process.env.NODE_ENV = 'development';
});
