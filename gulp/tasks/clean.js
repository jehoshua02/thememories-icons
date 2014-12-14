var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
  var config = {
    files: [
      'dist/css',
      'dist/scss',
      'dist/font',
      'dist/icons.json',
      'ref/build'
    ]
  };

  del(config.files);
});
