module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    'plugin:prettier/recommended',
    './src/presets/eslint/eslintrc-auto-import.json'
  ],
  // overrides: [
  //   {
  //     files: ['*.ts', '*.tsx'],
  //     parserOptions: {
  //       project: ['./tsconfig.json']
  //     }
  //   }
  // ],
  // parserOptions: {
  //   ecmaVersion: 'latest',
  //   parser: '@typescript-eslint/parser',
  //   sourceType: 'module'
  // },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'no-empty-function': 'warn',
    'no-unused-vars': 1,
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/no-v-model-argument': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'array-callback-return': 'off',
    'vue/no-mutating-props': 'off'
  },
  // globals: {
  //   ElMessage: true,
  //   ElLoading: true
  // }
}
