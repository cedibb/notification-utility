module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/space-before-function-paren': 'off',
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'off'
  }
};
