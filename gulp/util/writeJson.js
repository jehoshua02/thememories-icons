var writeFile = require('fs').writeFile;

var writeJson = function (file, data) {
  var json = JSON.stringify(data, null, 2);
  writeFile(file, json);
};

module.exports = writeJson;
