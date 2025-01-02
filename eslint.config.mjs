import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   { files: ['**/*.{js,mjs,cjs,jsx}'] },
//   { languageOptions: { globals: globals.browser } },
//   pluginJs.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ];
/** @type {import('eslint').Linter.Config} */
export default {
  files: ['**/*.{js,mjs,cjs,jsx}'],
  languageOptions: {
    globals: globals.browser,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // 여기에 추가적인 규칙을 정의할 수 있습니다.
  },
};
