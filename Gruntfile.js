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
     * Pull down a list of repos from Github.
     * (bundled with the readme task)
     */
    repos: {
      assemble: {
        options: {
          path: '/orgs/assemble/'
        },
        files: {
          'docs/repos.json': ['repos?page=1&per_page=100']
        }
      }
    },

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

  // Refresh the list of repos, build readme.
  grunt.registerTask('update', ['repos', 'readme']);

  // Default tasks to be run.
  grunt.registerTask('default', ['readme']);
};
