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
     * Generate an up-to-date list of
     * Assemble's GitHub repos
     */
    github: {
      assemble: {
        src: ['/repos?page=1&per_page=100'],
        dest: 'docs/repos.json'
      }
    },


    /**
     * Extend context for templates
     * with repos.json
     */
    readme: {
      options: {
        metadata: ['<%= github.assemble.dest %>']
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-readme');

  // Default tasks to be run.
  grunt.registerTask('default', ['readme']);
};
