module.exports = {
  resize: {
    options: {
      sizes: [{
        width: 1024
      }]
    },
    files: [{
      expand: true,
      src: ['<%= src %>/**.{jpg,gif,png}'],
      custom_dest: '<%= dest %>/{%= width %}/'
    }]
  }
};
