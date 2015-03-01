/*jslint node: true */
'use strict';

/*
  Remove the linting error:
    'require' is not defined

  with: node: true
*/

module.exports = {
  options: {
    node: true,
    curly: true,
    eqeqeq: true,
    immed: true,
    latedef: true,
    newcap: true,
    noarg: true,
    sub: true,
    undef: true,
    unused: true,
    boss: true,
    eqnull: true,
    browser: true,
    globals: {
      jQuery: true
    }
  },
  gruntfile: {
    src: 'Gruntfile.js'
  }
};
