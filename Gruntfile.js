/* jshint node: true */

'use strict';

var JSCS_OPTIONS =
{
    disallowEmptyBlocks: true,
    // Encourage use of abbreviations: "char", "obj", "str".
    disallowIdentifierNames: ['character', 'object', 'string'],
    disallowMultipleLineBreaks: true,
    disallowMultipleVarDecl: true,
    disallowNamedUnassignedFunctions: true,
    disallowSpaceAfterObjectKeys: true,
    disallowSpaceAfterPrefixUnaryOperators: true,
    disallowSpaceBeforeComma: { allExcept: ['sparseArrays'] },
    disallowSpaceBeforePostfixUnaryOperators: true,
    disallowSpaceBeforeSemicolon: true,
    disallowSpacesInCallExpression: true,
    disallowSpacesInFunctionDeclaration: { beforeOpeningRoundBrace: true },
    disallowSpacesInNamedFunctionExpression: { beforeOpeningRoundBrace: true },
    disallowSpacesInsideBrackets: true,
    disallowSpacesInsideParentheses: true,
    disallowTabs: true,
    disallowTrailingWhitespace: 'ignoreEmptyLines',
    disallowYodaConditions: true,
    requireAlignedMultilineParams: true,
    requireBlocksOnNewline: true,
    requireEarlyReturn: true,
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
    requireLineBreakAfterVariableAssignment: true,
    requireLineFeedAtFileEnd: true,
    requireNewlineBeforeBlockStatements: true,
    requireObjectKeysOnNewLine: { allExcept: ['sameLine'] },
    requirePaddingNewLinesAfterUseStrict: true,
    requireSpaceAfterBinaryOperators: true,
    requireSpaceAfterComma: true,
    requireSpaceAfterKeywords: true,
    requireSpaceAfterLineComment: true,
    requireSpaceBeforeBinaryOperators: true,
    requireSpaceBeforeBlockStatements: true,
    requireSpaceBeforeKeywords: ['delete', 'if', 'in', 'instanceof'],
    requireSpaceBeforeObjectValues: true,
    requireSpacesInConditionalExpression: true,
    requireSpacesInForStatement: true,
    requireSpacesInsideObjectBrackets: 'all',
    validateAlignedFunctionParameters: true,
    validateIndentation: { includeEmptyLines: true, value: 4 }
};

var JSHINT_OPTIONS =
{
    // Enforcing options
    eqeqeq: true,
    immed: true,
    maxlen: 100,
    newcap: false,
    noarg: true,
    noempty: true,
    quotmark: true,
    singleGroups: true,
    strict: true,
    trailing: true,
    undef: true,
    unused: true,
    
    // Relaxing options
    boss: true,
    elision: true,
    eqnull: true,
    evil: true,
    validthis: true,
    '-W018': true,
};

module.exports =
    function (grunt)
    {
        // Project configuration.
        grunt.initConfig(
            {
                clean: { default: '*.screwed.js' },
                jscs: { default: '*.js', options: JSCS_OPTIONS },
                jshint: { src: '*.js', options: JSHINT_OPTIONS },
                shell:
                {
                    default:
                    {
                        command:
                            'node node_modules/jscrewit/screw.js ' +
                            '-ct -f ANY_DOCUMENT,ANY_WINDOW,HISTORY ' +
                            'node_modules/jquery/dist/jquery.min.js ' +
                            'jquery-2.2.1.screwed.js'
                    }
                }
            }
        );
        
        // These plugins provide necessary tasks.
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-jscs');
        grunt.loadNpmTasks('grunt-shell');
        
        // Default task.
        grunt.registerTask('default', ['clean', 'jshint', 'jscs', 'shell']);
    };
