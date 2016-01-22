var fs = require('fs');
var path = require('path');
var walk = require('walk');


var getJsFiles = function(callback) {
  var files = [];
  var walker = walk.walk(path.join(__dirname, '../../client', 'modules'), {
    followLinks: false
  });

  walker.on('file', function(root, stat, next) {
    // Add this file to the list of files
    if (path.basename(root) === 'controllers' || path.basename(root) === 'services') {
      var dir = '/modules/' + path.basename(path.dirname(root)) + '/' + path.basename(root) + '/' + stat.name;
      files.push(dir);
    }
    next();
  });

  walker.on('end', function() {
    callback(files)
  });
};

module.exports = {
  getJsFiles: getJsFiles
}