/*jslint node: true */
'use strict';

module.exports = function(grunt, options) {

  return {
    api: {
      options: {
        url: 'http://www.splashbase.co/api/v1/images/latest',
        json: true,
        callback: function(error, response, body) {
          var images = [];

          body.images.forEach(function(image) {
            images.push(image.url);
          });

          grunt.config("wget.api.src", images);

        }
      },
      // Optionally writes response in a destination file
      //dest: '<%= src %>' + '/' + '<%= json %>'
    }
  };

};
