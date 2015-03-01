/*jslint node: true */
'use strict';

module.exports = {
  dynamic: {
    files: [{
      expand: true,
      src: ['<%= dest %>/**/*.{png,jpg,gif}']
    }]
  }
};
