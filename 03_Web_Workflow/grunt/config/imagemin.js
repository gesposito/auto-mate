/*jslint node: true */
'use strict';

module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: '<%= src %>',
      src: ['img/**/*.{png,jpg,gif}'],
      dest: '<%= dest %>'
    }]
  }
};
