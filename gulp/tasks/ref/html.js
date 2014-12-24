var gulp = require('gulp');
var template = require('gulp-consolidate');
var readJson = require('jsonfile').readFileSync;

gulp.task('ref/html', ['dist/font'], function () {
  var config = {
    src: './ref/src/templates/index.html',
    dest: './ref/build',
    icons: './dist/icons.json',
    colors: [
      'dark-gray',
      'medium-gray',
      'light-gray',
      'white',
      'cream',
      'gold',
      'orange',
    ]
  };

  return gulp.src(config.src)
    .pipe(template('lodash', {
      icons: readJson(config.icons),
      colors: config.colors
    }))
    .pipe(gulp.dest(config.dest));
});
