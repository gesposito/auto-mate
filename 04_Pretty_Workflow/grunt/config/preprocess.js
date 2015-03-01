/*jslint node: true */
'use strict';

module.exports = {
  options: {
    context: {
      BUILD: true
    }
  },
  html: {
    src: '<%= dest %>' + 'index.html',
    dest: '<%= dest %>' + 'index.html'
  }
};
