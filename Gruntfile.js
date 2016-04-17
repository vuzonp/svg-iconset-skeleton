module.exports = function(grunt) {

  grunt.initConfig({

    // SVGO is used for clean the original files:
    svgmin: {
      options: {
        full: true,
        plugins: [
          { cleanupIDs: false },
          { cleanupListOfValues: true },
          { convertPathData: true },
          { removeViewBox: false },
          { removeUselessStrokeAndFill: true },
          { removeEmptyAttrs: true },
          { removeDimensions: true },
          { sortAttrs: true },
        ]
      },
      // https://github.com/svg/svgo/issues/283
      // http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['*.svg'],
          dest: 'dist/',
          ext: '.svg',
          extDot: 'first'
        }],
      },
    },

    // SVGSTORE is used for create the bundle:
    svgstore: {
      options: {
        cleanup: true,
        formatting: {
          indent_size : 2,
          indent_char: " "
        },
        includedemo: true,
        prefix: "icon-",
        svg: {
          viewBox: "0 0 48 48",
          xmlns: "http://www.w3.org/2000/svg"
        }
      },
      default: {
        files: {
          "sprite.svg": ["dist/*.svg"],
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-svgstore');

  // Default task(s).
  grunt.registerTask('default', ["svgmin", "svgstore"]);

};
