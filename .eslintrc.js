module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off'
  },
  globals: {
    fetch: false
  }
};

// module.exports = {
//   root: true,
//   extends: ['airbnb-base', 'plugin:eslint-plugin/recommended'],
//   plugins: ['eslint-plugin'],
//   env: {
//     es6: true,
//     node: true
//   },
//   parserOptions: {
//     ecmaVersion: 6,
//     ecmaFeatures: {
//       jsx: true
//     },
//     sourceType: 'script'
//   },
//   rules: {
//     'comma-dangle': [2, 'never'],
//     'object-curly-spacing': [2, 'never'],
//     'array-bracket-spacing': [2, 'never'],
//     'max-len': [
//       2,
//       120,
//       {
//         ignoreStrings: true,
//         ignoreTemplateLiterals: true,
//         ignoreComments: true
//       }
//     ],
//     'operator-linebreak': [2, 'after'],
//     'consistent-return': 0,

//     'prefer-destructuring': [
//       2,
//       { array: false, object: false },
//       { enforceForRenamedProperties: false }
//     ],

//     'function-paren-newline': 0,
//     'no-plusplus': 1,
//     'no-param-reassign': 1,
//     'no-mixed-operators': 1,
//     'no-restricted-syntax': 1,
//     'valid-jsdoc': [
//       2,
//       {
//         requireReturn: false,
//         requireParamDescription: false,
//         requireReturnDescription: false
//       }
//     ]
//   },
//   overrides: [
//     {
//       files: 'tests/**',
//       rules: {
//         'no-template-curly-in-string': 1
//       }
//     }
//   ]
// };
