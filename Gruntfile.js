/* eslint-env node */

'use strict';

var ESLINT_RULES =
{
    /* Possible Errors */
    'comma-dangle':                     ['error', 'only-multiline'],
    'no-cond-assign':                   'off',
    'no-console':                       'off',
    'no-constant-condition':            'error',
    'no-control-regex':                 'error',
    'no-debugger':                      'error',
    'no-dupe-args':                     'error',
    'no-dupe-keys':                     'error',
    'no-duplicate-case':                'error',
    'no-empty':                         ['error', { allowEmptyCatch: true }],
    'no-empty-character-class':         'error',
    'no-ex-assign':                     'error',
    'no-extra-boolean-cast':            'error',
    'no-extra-parens':                  'error',
    'no-extra-semi':                    'error',
    'no-func-assign':                   'error',
    'no-inner-declarations':            'error',
    'no-invalid-regexp':                'error',
    'no-irregular-whitespace':          'error',
    'no-negated-in-lhs':                'error',
    'no-obj-calls':                     'error',
    'no-prototype-builtins':            'off',
    'no-regex-spaces':                  'off',
    'no-sparse-arrays':                 'off',
    'no-unexpected-multiline':          'off',
    'no-unreachable':                   'error',
    'no-unsafe-finally':                'error',
    'use-isnan':                        'error',
    'valid-jsdoc':                      'error',
    'valid-typeof':                     'error',
    
    /* Best Practices */
    'accessor-pairs':                   'error',
    'array-callback-return':            'off',
    'block-scoped-var':                 'off',
    'complexity':                       'error',
    'consistent-return':                'off',
    'curly':                            ['error', 'multi-or-nest'],
    'default-case':                     'off',
    'dot-location':                     ['error', 'property'],
    'dot-notation':                     'error',
    'eqeqeq':                           ['error', 'allow-null'],
    'guard-for-in':                     'off',
    'no-alert':                         'off',
    'no-caller':                        'error',
    'no-case-declarations':             'error',
    'no-div-regex':                     'error',
    'no-else-return':                   'error',
    'no-empty-function':                'off',
    'no-empty-pattern':                 'error',
    'no-eq-null':                       'off',
    'no-eval':                          'off',
    'no-extend-native':                 'error',
    'no-extra-bind':                    'error',
    'no-extra-label':                   'error',
    'no-fallthrough':                   'error',
    'no-floating-decimal':              'error',
    'no-implicit-coercion':             'off',
    'no-implicit-globals':              'off',
    'no-implied-eval':                  'error',
    'no-invalid-this':                  'off',
    'no-iterator':                      'error',
    'no-labels':                        'error',
    'no-lone-blocks':                   'error',
    'no-loop-func':                     'error',
    'no-magic-numbers':                 'off',
    'no-multi-spaces':                  'off',
    'no-multi-str':                     'error',
    'no-native-reassign':               'error',
    'no-new':                           'off',
    'no-new-func':                      'off',
    'no-new-wrappers':                  'error',
    'no-octal':                         'error',
    'no-octal-escape':                  'error',
    'no-param-reassign':                'off',
    'no-proto':                         'error',
    'no-redeclare':                     'error',
    'no-return-assign':                 'error',
    'no-script-url':                    'error',
    'no-self-assign':                   'error',
    'no-self-compare':                  'error',
    'no-sequences':                     'error',
    'no-throw-literal':                 'error',
    'no-unmodified-loop-condition':     'error',
    'no-unused-expressions':            'error',
    'no-unused-labels':                 'error',
    'no-useless-call':                  'error',
    'no-useless-concat':                'error',
    'no-useless-escape':                'error',
    'no-void':                          'off',
    'no-warning-comments':              'error',
    'no-with':                          'error',
    'radix':                            'error',
    'vars-on-top':                      'off',
    'wrap-iife':                        'off',
    'yoda':                             'error',
    
    /* Strict Mode */
    'strict':                           ['error', 'safe'],
    
    /* Variables */
    'init-declarations':                'off',
    'no-catch-shadow':                  'error',
    'no-delete-var':                    'error',
    'no-label-var':                     'error',
    'no-restricted-globals':            'error',
    'no-shadow':                        'off',
    'no-shadow-restricted-names':       'error',
    'no-undef':                         'error',
    'no-undef-init':                    'error',
    'no-undefined':                     'error',
    'no-unused-vars':                   ['error', { vars: 'local' }],
    'no-use-before-define':             'off',
    
    /* Node.js and CommonJS */
    'callback-return':                  'off',
    'global-require':                   'off',
    'handle-callback-err':              'error',
    'no-mixed-requires':                'error',
    'no-new-require':                   'error',
    'no-path-concat':                   'error',
    'no-process-env':                   'error',
    'no-process-exit':                  'error',
    'no-restricted-modules':            'error',
    'no-sync':                          'off',
    
    /* Stylistic Issues */
    'array-bracket-spacing':            'error',
    'block-spacing':                    'error',
    'brace-style':                      ['error', 'allman'],
    'camelcase':                        'off',
    'comma-spacing':                    'error',
    'comma-style':
    ['error', 'last', { exceptions: { ArrayExpression: true } }],
    'computed-property-spacing':        'error',
    'consistent-this':                  'off',
    'eol-last':                         'error',
    'func-names':                       ['error', 'never'],
    'func-style':                       'off',
    'id-blacklist':                     'off',
    'id-length':                        'off',
    // Encourage use of abbreviations: "char", "obj", "str".
    'id-match':                         ['error', '^(?!(character|object|string)(?![_a-z]))'],
    'indent':                           ['error', 4, { VariableDeclarator: 0 }],
    'jsx-quotes':                       'error',
    'key-spacing':                      ['error', { mode: 'minimum' }],
    'keyword-spacing':                  'error',
    'linebreak-style':                  'error',
    'lines-around-comment':
    ['error', { allowBlockStart: true, allowObjectStart: true }],
    'max-depth':                        'off',
    'max-len':                          ['error', { code: 100 }],
    'max-lines':                        'off',
    'max-nested-callbacks':             'error',
    'max-params':                       'off',
    'max-statements':                   'off',
    'max-statements-per-line':          'error',
    'new-cap':                          ['error', { capIsNew: false }],
    'new-parens':                       'error',
    'newline-after-var':                'off',
    'newline-before-return':            'off',
    'newline-per-chained-call':         'off',
    'no-array-constructor':             'error',
    'no-bitwise':                       'off',
    'no-continue':                      'off',
    'no-inline-comments':               'off',
    'no-lonely-if':                     'off',
    'no-mixed-operators':               'off',
    'no-mixed-spaces-and-tabs':         'off',
    'no-multiple-empty-lines':          ['error', { max: 1 }],
    'no-negated-condition':             'off',
    'no-nested-ternary':                'off',
    'no-new-object':                    'error',
    'no-plusplus':                      'off',
    'no-restricted-syntax':             'error',
    'no-spaced-func':                   'off',
    'no-ternary':                       'off',
    'no-trailing-spaces':               ['error', { skipBlankLines: true }],
    'no-underscore-dangle':             'off',
    'no-unneeded-ternary':              'error',
    'no-whitespace-before-property':    'error',
    'object-curly-newline':             'off',
    'object-curly-spacing':             ['error', 'always'],
    'object-property-newline':          ['error', { allowMultiplePropertiesPerLine: true }],
    'one-var':                          ['error', 'never'],
    'one-var-declaration-per-line':     'error',
    'operator-assignment':              'error',
    'operator-linebreak':               ['error', 'after'],
    'padded-blocks':                    ['error', 'never'],
    'quote-props':                      'off',
    'quotes':                           ['error', 'single'],
    'require-jsdoc':                    'off',
    'semi':                             'error',
    'semi-spacing':                     'error',
    'sort-vars':                        'off',
    'space-before-blocks':              'error',
    'space-before-function-paren':      ['error', { anonymous: 'always', named: 'never' }],
    'space-in-parens':                  'error',
    'space-infix-ops':                  'error',
    'space-unary-ops':                  'error',
    'spaced-comment':                   'error',
    'unicode-bom':                      'error',
    'wrap-regex':                       'off',
};

var JSCS_OPTIONS =
{
    disallowSpacesInCallExpression: true,
    disallowTabs: true,
    requireAlignedMultilineParams: true,
    requireKeywordsOnNewLine:
    [
        'break',
        'case',
        'catch',
        'continue',
        'default',
        'do',
        'else',
        'finally',
        'for',
        'return',
        'switch',
        'throw',
        'try',
        'while'
    ],
    requirePaddingNewLinesAfterUseStrict: true,
    requireSpaceBeforeKeywords: ['delete', 'if', 'in', 'instanceof'],
};

module.exports =
    function (grunt)
    {
        // Project configuration.
        grunt.initConfig(
            {
                clean: { default: '*.screwed.js' },
                eslint: { default: '*.js', options: { rules: ESLINT_RULES } },
                jscs: { default: '*.js', options: JSCS_OPTIONS },
                shell:
                {
                    default:
                    {
                        command:
                            'node node_modules/jscrewit/screw.js ' +
                            '-ct -f ANY_DOCUMENT,ANY_WINDOW,HISTORY ' +
                            'node_modules/jquery/dist/jquery.min.js ' +
                            'jquery-3.0.0.screwed.js'
                    }
                }
            }
        );
        
        // These plugins provide necessary tasks.
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-eslint');
        grunt.loadNpmTasks('grunt-jscs');
        grunt.loadNpmTasks('grunt-shell');
        
        // Default task.
        grunt.registerTask('default', ['clean', 'eslint', 'jscs', 'shell']);
    };
