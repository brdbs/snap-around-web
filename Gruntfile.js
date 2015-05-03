module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      files: ['js/*.js'],
      tasks: ['browserify']
    },
    browserify: {
      dist: {
        files: {
          'dist/app.bundle.js': ['app/app.js'],
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};