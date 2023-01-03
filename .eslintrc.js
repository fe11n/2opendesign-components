module.exports = {
  root: true,
  extends: [
    // add more generic rulesets here,
    'plugin:vue/vue3-recommended',
    // 'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    // project: ['./**/tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // override/add rules settings here,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'quote-props': ['warn', 'as-needed'],
    'comma-dangle': ['error', 'only-multiline'],
    camelcase: ['error', { properties: 'never' }],
    'array-bracket-spacing': 'warn',
    'arrow-spacing': 'warn',
    'block-spacing': 'warn',
    'comma-spacing': 'warn',
    'computed-property-spacing': 'warn',
    'generator-star-spacing': 'warn',
    'key-spacing': 'warn',
    'keyword-spacing': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'rest-spread-spacing': 'warn',
    'switch-colon-spacing': 'error',
    'semi-spacing': 'warn',
    'template-curly-spacing': 'warn',
    'template-tag-spacing': 'warn',
    'yield-star-spacing': 'warn',
    semi: ['warn', 'always'],
    'no-trailing-spaces': 'warn',
    'prefer-template': 'error',
    'prefer-spread': 'error',
    'no-var': 'error',
    'max-lines-per-function': ['error', {
      max: 100,
      skipComments: true,
      skipBlankLines: true
    }],
    complexity: ['warn', 20],
    'max-depth': ['warn', 4],
    'max-len': ['warn', {
      code: 160,
      ignoreTemplateLiterals: true,
      ignoreStrings: true,
      ignorePattern: 'd="([\\s\\S]*?)"',
    }],
    'default-param-last': 'off',
    'no-param-reassign': ['error', { props: false }],

    // 'vue/max-attributes-per-line': ['error', {
    //   singleline: { max: 4 },
    //   multiline: { max: 2 },
    // }],
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': ['warn', {
      html: {
        void: 'always',
        normal: 'never',
      },
    }],
    // "vue/html-indent": ["error", type, {
    //   "attribute": 1,
    //   "baseIndent": 1,
    //   "closeBracket": 2,
    //   "alignAttributesVertically": true,
    //   "ignores": []
    // }],

    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/multiline-html-element-content-newline': 'warn',

    // for ts
    // '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/default-param-last': 'warn',
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error', { hoist: 'all' }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'warn',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'warn'

    // 'dot-notation': 'off',
    // '@typescript-eslint/dot-notation': 'warn',
    // 'no-return-await': 'off',
    // '@typescript-eslint/return-await': 'warn',
    // 'require-await': 'off',
    // '@typescript-eslint/require-await': 'error',
    // 'no-throw-literal': 'off',
    // '@typescript-eslint/no-throw-literal': 'warn',

  },
};