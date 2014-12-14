var gulp = require('gulp');

gulp.task('watch', ['build'], function () {
  gulp.watch([
    './src/**/*',
    './ref/src/**/*',
    './dist/svg/*'
  ], ['build']);
});
