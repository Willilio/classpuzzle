module.exports = {
  'env': {
    'browser': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 12,
    'ecmaFeatures': {
      'jsx': true,
    },
    'sourceType': 'module'
  },
  'plugins': ['react'],
  'rules': {
    'quotes': ['error', 'single'],
    // we want to force semicolons
    'semi': ['error', 'always'],
    // we use 2 spaces to indent our code
    'indent': ['error', 2],
    // we want to avoid extraneous spaces
    'no-multi-spaces': ['error']
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
};