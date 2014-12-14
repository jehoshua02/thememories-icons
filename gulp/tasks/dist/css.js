var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('dist/css', ['dist/scss', 'dist/font'], function () {
  var config = {
    src: './dist/scss/styles.scss',
    dest: './dist/css'
  };

  return gulp.src(config.src)
    .pipe(sass())
    .pipe(gulp.dest(config.dest));
});
