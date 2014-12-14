var readJson = function (filename) {
  var json = require('fs').readFileSync(filename, "utf8");
  return JSON.parse(json);
};

module.exports = readJson;
