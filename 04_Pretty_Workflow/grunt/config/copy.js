/*jslint node: true */
'use strict';

var bower = '../bower_components/';

module.exports = {
  main: {
    expand: true,
    cwd: '<%= src %>',
    src: ['**'],
    dest: '<%= dest %>'
  },
  js: {
    expand: true,
    cwd: '<%= src %>',
    flatten: true,
    src: [
      bower + 'jquery/dist/jquery.min.js',
      bower + 'bootstrap/dist/js/bootstrap.min.js'
    ],
    dest: '<%= dest %>' + 'js/'
  },
  css: {
    expand: true,
    cwd: '<%= src %>',
    flatten: true,
    src: [
      bower + 'bootstrap/dist/css/bootstrap.min.css'
    ],
    dest: '<%= dest %>' + 'css/'
  }
};
