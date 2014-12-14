var gulp = require('gulp');

gulp.task('ref/font', ['dist/font'], function () {
  var config = {
    src: './dist/font/**/*',
    dest: './ref/build/bower_components/thememories-icons/dist/font'
  };

  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
