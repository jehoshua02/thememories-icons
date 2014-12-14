var gulp = require('gulp');

gulp.task('dist/scss', function () {
  var config = {
    src: './src/scss/**/*',
    dest: './dist/scss'
  };

  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
