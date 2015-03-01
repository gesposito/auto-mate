/*jslint node: true */
'use strict';

var dest = '<%= dest %>';

module.exports = {
  build: [dest + '*'],
  js: [
      dest + 'js/*', '!' + dest + '<%= minjs %>'
    ],
  css: [
      dest + 'css/*', '!' + dest +'<%= mincss %>'
    ]
};
