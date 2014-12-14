var gulp = require('gulp');
var ghpages = require('gulp-gh-pages');

gulp.task('ghpages', function () {
  gulp.src('./ref/build/**/*').pipe(ghpages());
});
