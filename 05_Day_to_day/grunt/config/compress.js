module.exports = {
  main: {
    options: {
      archive: '<%= dest %>/dest.zip',
      mode: 'zip'
    },
    files: [{
      expand: true,
      flatten: true,
      src: ['<%= dest %>/**/**.{jpg,gif,png}'],
      filter: 'isFile'
    }]
  }
};
