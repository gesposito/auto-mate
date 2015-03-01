module.exports = function(grunt) {
  var path = require('path');

  require('load-grunt-config')(grunt, {
    // path to task.js files, defaults to grunt dir
    configPath: path.join(process.cwd(), 'grunt/config'),

    // Optionally you can use jit-grunt instead of load-grunt-tasks
    jitGrunt: {
      jitGrunt: true
    }

  });

};
