/*jslint node: true */
'use strict';

module.exports = {
  options: {
    compress: {
      drop_console: true
    }
  },
  build: {
    files: [{
      expand: true,
      src: '<%= dest %>' + '<%= minjs %>'
    }]
  }
};
