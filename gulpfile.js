'use strict';

const { parallel, series, task } = require('gulp');

task
(
    'clean',
    async () =>
    {
        const { deleteAsync } = await import('del');

        await deleteAsync('*.screwed.js');
    },
);

task
(
    'lint',
    async () =>
    {
        const { lint } = require('@fasttime/lint');

        await lint({ src: ['*.js', '!*.screwed.js'], jsVersion: 2020, envs: 'node' });
    },
);

task
(
    'screw',
    callback =>
    {
        const { fork } = require('child_process');

        const { resolve } = require;
        const modulePath = resolve('jscrewit/screw.js');
        const jQueryPath = resolve('jquery/dist/jquery.min.js');
        const jQueryScrewedPath = require('./package.json').main;
        const childProcess =
        fork(modulePath, ['-ct', '-f', 'BROWSER', jQueryPath, jQueryScrewedPath]);
        childProcess.on
        (
            'exit',
            (code, signal) =>
            {
                let error;
                if (code || signal)
                {
                    const detail = code ? `exit code ${code}` : `signal ${signal}`;
                    error = `Could not create jQuery Screwed: ${detail}`;
                }
                callback(error);
            },
        );
    },
);

task('default', series(parallel('clean', 'lint'), 'screw'));
