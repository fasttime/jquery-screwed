'use strict';

const { parallel, series, task } = require('gulp');

task
(
    'clean',
    async () =>
    {
        const del = require('del');

        await del('*.screwed.js');
    },
);

task
(
    'lint',
    () =>
    {
        const lint = require('gulp-fasttime-lint');

        const stream =
        lint({ src: ['*.js', '!*.screwed.js'], envs: ['node'], parserOptions: { ecmaVersion: 8 } });
        return stream;
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
        const child = fork(modulePath, ['-ct', '-f', 'BROWSER', jQueryPath, jQueryScrewedPath]);
        child.on
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
