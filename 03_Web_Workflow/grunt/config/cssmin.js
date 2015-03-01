/*jslint node: true */
'use strict';

module.exports = {
  build: {
    files: {
      '<%= dest %><%= mincss %>': ['<%= dest %>' + 'css/*.css']
   }
  }
};
