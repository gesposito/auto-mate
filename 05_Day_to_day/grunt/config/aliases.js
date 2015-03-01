module.exports = function(grunt, options) {

  return {
    'default': {
      description: 'Executes the whole task chain',
      tasks: [
        'api',
        'process'
      ]
    },
    'api': {
      description: 'Retrieves images list from an external API and downloads files locally',
      tasks: [
        'http',
        'wget'
      ]
    },
    'process': {
      description: 'Resize images, optimize and compress them',
      tasks: [
        'responsive_images:resize',
        'imagemin',
        'compress'
      ]
    }
  };

};
