/*jslint node: true */
'use strict';

module.exports = {
  // tasks of 'first' run concurrently,
  // after they all finished, tasks of 'second' run concurrently
  first: [ 'preprocess', 'concat', 'imagemin'],
  second: ['uglify', 'cssmin', 'uncss']
};
