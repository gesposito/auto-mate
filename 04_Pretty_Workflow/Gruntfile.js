module.exports = function(grunt) {
  var path = require('path');
  var cwd = process.cwd();

  // measures the time each task takes
  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    // path to task.js files, defaults to grunt dir
    configPath: path.join(cwd, 'grunt/config'),

    //data passed into config.  Can use with <%= var %>
    data: {
      src: 'src/',
      dest: 'grunt/build/',
      minjs: 'js/build.min.js',
      mincss: 'css/build.min.css'
    },

    // Optionally you can use jit-grunt instead of load-grunt-tasks
    jitGrunt: {
      jitGrunt: true
    }

  });

};
