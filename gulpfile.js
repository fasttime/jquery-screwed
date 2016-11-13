/* eslint-env node */

'use strict';

var gulp = require('gulp');

gulp.task(
    'clean',
    function ()
    {
        var del = require('del');
        
        var stream = del('*.screwed.js');
        return stream;
    }
);

gulp.task(
    'lint',
    function ()
    {
        var lint = require('gulp-fasttime-lint');
        
        var SRC = ['*.js', '!*.screwed.js'];
        var stream = gulp.src(SRC).pipe(lint());
        return stream;
    }
);

gulp.task(
    'screw',
    function (callback)
    {
        var child_process = require('child_process');
        
        function execCallback(error, stdout, stderr)
        {
            if (stdout)
                console.log(stdout);
            if (stderr)
                console.error(stderr);
            callback(error);
        }
        
        var COMMAND =
            'node node_modules/jscrewit/screw.js ' +
            '-ct -f BROWSER node_modules/jquery/dist/jquery.min.js ' +
            'jquery-3.1.1.screwed.js';
        child_process.exec(COMMAND, execCallback);
    }
);

gulp.task(
    'default',
    function (callback)
    {
        var runSequence = require('run-sequence');
        
        runSequence(['clean', 'lint'], 'screw', callback);
    }
);
