module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: { jsx: true },
  },
  env: { browser: true, node: true, es6: true },
  rules: {
    '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: 'res|next|stage|^err|on|config|e|_' }],
    'arrow-body-style': [2, 'as-needed'],
    'no-param-reassign': [2, { props: false }],
    'no-unused-expressions': [1, { allowTaggedTemplates: true }],
    quotes: 'off',
    '@typescript-eslint/quotes': [2, 'backtick', { avoidEscape: true }],
    'import/no-unresolved': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', '.tsx'] }],
    'react-hooks/rules-of-hooks': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'prettier/prettier': ['error', { arrowParens: 'always', printWidth: 120 }],
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'no-shadow': 0,
    'react/prop-types': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
