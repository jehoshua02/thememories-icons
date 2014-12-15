var gulp = require('gulp');
var font = require('gulp-iconfont');
var saveCodepoints = require('../../util/saveCodepoints');

gulp.task('dist/font', function() {
  var config = {
    src: './dist/svg/*.svg',
    dest: './dist/font',
    name: 'thememories-icons',
    start: 0xE601
  };

  return gulp.src(config.src)
    .pipe(font({
      fontName: config.name,
      startCodepoint: config.start
    }))
    .on('codepoints', function(codepoints, options) {
      saveCodepoints(codepoints);
    })
    .pipe(gulp.dest(config.dest));
});
