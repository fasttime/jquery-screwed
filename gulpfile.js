'use strict';

const { parallel, series, task } = require('gulp');

task
(
    'clean',
    () =>
    {
        const del = require('del');

        const stream = del('*.screwed.js');
        return stream;
    }
);

task
(
    'lint',
    () =>
    {
        const lint = require('gulp-fasttime-lint');

        const stream =
        lint({ src: ['*.js', '!*.screwed.js'], envs: ['node'], parserOptions: { ecmaVersion: 6 } });
        return stream;
    }
);

task
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

task('default', series(parallel('clean', 'lint'), 'screw'));
