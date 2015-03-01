/*jslint node: true */
'use strict';

module.exports = function(grunt, options) {

  grunt.task.registerTask('wget-config', 'Reads configuration needed for wget and runs it', function() {

    grunt.config("wget.api.src", grunt.config("images"));
    grunt.task.run("wget:api");

  });

};
