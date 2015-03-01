/*jslint node: true */
'use strict';

var path = require('path');
var cwd = process.cwd();

module.exports = function(grunt, options) {

  return {
    api: {
      baseUrl: {
        options: {
          overwrite: true
        }
      },
      src: [],
      dest: '<%= src %>'

    }
  };

};
