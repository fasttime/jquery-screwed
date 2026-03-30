'use strict';

const { dirname, join }                 = require('node:path');
const { parallel, series, src, task }   = require('gulp');
const syncReadable                      = require('sync-readable');

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
    syncReadable
    (
        async () =>
        {
            const { createConfig }  = require('@origin-1/eslint-config');
            const globals           = require('globals');
            const gulpESLintNew     = require('gulp-eslint-new');

            const overrideConfig =
            await createConfig
            (
                {
                    jsVersion:          2020,
                    languageOptions:    { globals: globals.node, sourceType: 'script' },
                },
            );
            const stream =
            src(['*.js', '!*.screwed.js'])
            .pipe(gulpESLintNew({ overrideConfig, overrideConfigFile: true, warnIgnored: true }))
            .pipe(gulpESLintNew.format('compact'))
            .pipe(gulpESLintNew.failAfterError());
            return stream;
        },
    ),
);

task
(
    'screw',
    callback =>
    {
        const { fork } = require('child_process');

        const { resolve } = require;
        const modulePath = resolve('jscrewit/screw.js');
        const jQueryPath = join(dirname(resolve('jquery')), 'jquery.min.js');
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
