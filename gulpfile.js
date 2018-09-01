'use strict';

const gulp = require('gulp');

gulp.task
(
    'clean',
    () =>
    {
        const del = require('del');

        const stream = del('*.screwed.js');
        return stream;
    }
);

gulp.task
(
    'lint',
    () =>
    {
        const lint = require('gulp-fasttime-lint');

        const src = ['*.js', '!*.screwed.js'];
        const options = { envs: ['node'], parserOptions: { ecmaVersion: 6 } };
        const stream = gulp.src(src).pipe(lint(options));
        return stream;
    }
);

gulp.task
(
    'screw',
    callback =>
    {
        const child_process = require('child_process');

        function execCallback(error, stdout, stderr)
        {
            if (stdout)
                console.log(stdout);
            if (stderr)
                console.error(stderr);
            callback(error);
        }

        const COMMAND =
        'node node_modules/jscrewit/screw.js ' +
        '-ct -f BROWSER node_modules/jquery/dist/jquery.min.js jquery-3.3.1.screwed.js';
        child_process.exec(COMMAND, execCallback);
    }
);

gulp.task
(
    'default',
    callback =>
    {
        const runSequence = require('run-sequence');

        runSequence(['clean', 'lint'], 'screw', callback);
    }
);
