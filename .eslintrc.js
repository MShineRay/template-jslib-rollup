// ? How would you like to use ESLint? To check syntax, find problems, and enforce code style
// ? What type of modules does your project use? JavaScript modules (import/export)
// ? Which framework does your project use? None of these
// ? Does your project use TypeScript? No
// ? Where does your code run? Browser, Node
// ? How would you like to define a style for your project? Answer questions about your style
// ? What format do you want your config file to be in? JavaScript
// ? What style of indentation do you use? Spaces
// ? What quotes do you use for strings? Single
// ? What line endings do you use? Unix
// ? Do you require semicolons? No

module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
