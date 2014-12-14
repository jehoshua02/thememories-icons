var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('ref/css', ['dist/scss', 'ref/font'], function () {
  var config = {
    src: './ref/src/scss/styles.scss',
    dest: './ref/build'
  };

  return gulp.src(config.src)
    .pipe(sass())
    .pipe(gulp.dest(config.dest));
});
