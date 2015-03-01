/*jslint node: true */
'use strict';

module.exports = {
  build: {
    src: [
      '<%= dest %>js/*.js'
      ],
    dest: '<%= dest %>' + '<%= minjs %>'
  }
};
