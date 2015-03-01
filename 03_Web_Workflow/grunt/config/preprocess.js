/*jslint node: true */
'use strict';

module.exports = {
  options: {
    context: {
      BUILD: true
    }
  },
  html: {
    src: '<%= src %>' + 'index.html',
    dest: '<%= dest %>' + 'index.html'
  }
};
