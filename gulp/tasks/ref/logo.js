var gulp = require('gulp');

gulp.task('ref/logo', function () {
  var config = {
    src: './ref/src/logo/*',
    dest: './ref/build/logo'
  };

  gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
