module.exports = function(grunt, options) {
  return {
    'default': 'connect',
    'build': [
      'clean:build',
      'copy',
      'preprocess',
      'concat',
      'clean:js',
      'uglify',
      'cssmin',
      'clean:css',
      'imagemin'
    ]
  };
};
