module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dynamic_mappings: {
        // Grunt will search for "**/*.js" under "lib/" when the "uglify" task
        // runs and build the appropriate src-dest file mappings then, so you
        // don't need to update the Gruntfile when files are added or removed.
        files: [{
          expand: true, // Enable dynamic expansion.
          cwd: 'src/js/', // Src matches are relative to this path.
          src: ['**/*.js'], // Actual pattern(s) to match.
          dest: 'build/', // Destination path prefix.
          ext: '.min.js', // Dest filepaths will have this extension.
          extDot: 'first' // Extensions in filenames begin after the first dot
        }, ],
      },
    }，
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
