module.exports = function(grunt, options) {
  return {
    'default': 'connect',
    'build': [
      'clean:build',
      'copy',
      'concurrent:first',
      'clean:js',
      'concurrent:second',
      'clean:css',
      'notify:build'
    ],
    'seq-build': [
      'clean:build',
      'copy',
      'preprocess',
      'concat',
      'clean:js',
      'uglify',
      'cssmin',
      'clean:css',
      'uncss',
      'imagemin',
      'notify:build'
    ]
  };
};
