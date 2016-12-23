var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('serve', ['html:watch', 'styles:watch', 'js:watch', 'images:watch'], () => {
  gulp.src('dist')
    .pipe(webserver({
      host: 'localhost',
      port: '8001',
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'index.html',
      proxies: [
	{
	  source: '/api/',
	  target: 'http://localhost:8080/api/'
	}]
    }));
});
