module.exports = {
  rules: {
    align: [
      true,
      {
        options: ['parameters, statements']
      }
    ],
    'arrow-parens': [true, 'ban-single-arg-parens'],
    'arrow-return-shorthand': true,
    'await-promise': true,
    ban: [true, 'eval'],
    'ban-comma-operator': true,
    'comment-format': [true, 'check-space', 'check-uppercase'],
    curly: true,
    'cyclomatic-complexity': true,
    deprecation: true,
    eofline: true,
    'function-constructor': true,
    'max-file-line-count': [true, 150],
    'no-any': true,
    'no-default-export': true,
    'no-floating-promises': true,
    'no-for-in-array': true,
    'no-import-side-effect': true,
    'no-invalid-template-strings': true,
    'no-magic-numbers': true,
    'no-non-null-assertion': true,
    'no-null-keyword': true,
    'no-require-imports': true,
    'no-return-await': true,
    'no-trailing-whitespace': [true, 'ignore-jsdoc'],
    'no-unused-expression': [false, 'never'],
    'no-var-keyword': true,
    'prefer-const': true,
    'prefer-readonly': true,
    'prefer-object-spread': true,
    'promise-function-async': true,
    quotemark: [true, 'avoid-escape', 'avoid-template', 'single', 'jsx-double'],
    semicolon: [true, 'never'],
    'space-before-function-paren': [true, 'always'],
    'switch-default': true,
    'trailing-comma': [
      true,
      {
        multiline: {
          objects: 'never',
          arrays: 'never',
          functions: 'never',
          typeLiterals: 'ignore'
        },
        esSpecCompliant: true
      }
    ],
    'unnecessary-bind': true,
    whitespace: [true, 'check-module']
  }
}
