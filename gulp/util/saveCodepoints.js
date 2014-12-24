var gulp = require('gulp');
var writeJson = require('jsonfile').writeFileSync;
var template = require('gulp-consolidate');

var saveCodepoints = function (codepoints) {
  var config = {
    json: {
      dest: './dist/icons.json'
    },
    scss: {
      src: './src/templates/scss/_icons.scss',
      dest: './dist/scss',
      classPrefix: 'icon--'
    }
  };

  var data = codepoints.map(function (codepoint) {
    var name = codepoint.name.replace('icon_', '');
    return {
      name: name,
      className: config.scss.classPrefix + name,
      svg: codepoint.name,
      code: codepoint.codepoint
    };
  });

  console.log(JSON.stringify(data, null, 2));

  writeJson(config.json.dest, data);

  gulp.src(config.scss.src)
    .pipe(template('lodash', {
      icons: data
    }))
    .pipe(gulp.dest(config.scss.dest));
};

module.exports = saveCodepoints;
