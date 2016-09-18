/* eslint-env node */

'use strict';

module.exports =
    function (grunt)
    {
        // Project configuration.
        grunt.initConfig(
            {
                clean: { default: '*.screwed.js' },
                fasttime_lint: { default: ['*.js', '!**/*.screwed.js'] },
                shell:
                {
                    default:
                    {
                        command:
                            'node node_modules/jscrewit/screw.js ' +
                            '-ct -f ANY_DOCUMENT,ANY_WINDOW,HISTORY,INCR_CHAR ' +
                            'node_modules/jquery/dist/jquery.min.js ' +
                            'jquery-3.1.0.screwed.js'
                    }
                }
            }
        );
        
        // These plugins provide necessary tasks.
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-fasttime-lint');
        grunt.loadNpmTasks('grunt-shell');
        
        // Default task.
        grunt.registerTask('default', ['fasttime_lint', 'clean', 'shell']);
    };
