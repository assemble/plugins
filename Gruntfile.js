/*
 * assemble-contrib-plugins
 * https://github.com/assemble/plugins
 * Copyright (c) 2013
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    /**
     * Extend context for templates
     * with repos.json
     */
    readme: {
      options: {
        metadata: ['docs/repos.json']
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-readme');

  // Default tasks to be run.
  grunt.registerTask('default', ['readme']);
};
