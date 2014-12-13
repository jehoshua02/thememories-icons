var gulp = require('gulp');
var font = require('gulp-iconfont');
var styles = require('gulp-iconfont-css');
var consolidate = require('gulp-consolidate');

gulp.task('font', function() {
  var fontName = 'thememories-icons';

  gulp.src(['dist/svg/*.svg'])
    .pipe(styles({
      fontName: fontName,
      path: 'gulp/util/font/styles.css',
      targetPath: 'styles.css'
    }))
    .pipe(font({
      fontName: fontName,
    }))
    .on('codepoints', function(codepoints, options) {
      // CSS templating, e.g.
      console.log(codepoints, options);

      gulp.src('gulp/util/font/reference.html')
        .pipe(consolidate('lodash', { icons: codepoints }))
        .pipe(gulp.dest('dist/font'));

    })
    .pipe(gulp.dest('dist/font'));
});
