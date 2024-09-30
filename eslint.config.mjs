// eslint.config.js
import stylisticTs from '@stylistic/eslint-plugin-ts'
import parserTs from '@typescript-eslint/parser'

export default [
  {
    files: ['src/**/*{.ts,.js}'],
    plugins: {
      '@stylistic/ts': stylisticTs
    },
    languageOptions: {
      parser: parserTs
    },
    rules: {
      '@stylistic/ts/indent': ['error', 2],
      // ...
    }
  }
]