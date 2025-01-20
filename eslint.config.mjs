// import globals from 'globals';
// import pluginJs from '@eslint/js';
// import pluginReact from 'eslint-plugin-react';

// // /** @type {import('eslint').Linter.Config[]} */
// // export default [
// //   { files: ['**/*.{js,mjs,cjs,jsx}'] },
// //   { languageOptions: { globals: globals.browser } },
// //   pluginJs.configs.recommended,
// //   pluginReact.configs.flat.recommended,
// // ];
// /** @type {import('eslint').Linter.Config} */
// export default {
//   files: ['**/*.{js,mjs,cjs,jsx}'],
//   languageOptions: {
//     globals: globals.browser,
//   },
//   extends: ['eslint:recommended', 'plugin:react/recommended'],
//   settings: {
//     react: {
//       version: 'detect',
//     },
//   },
//   rules: {
//     // 여기에 추가적인 규칙을 정의할 수 있습니다.
//   },
// };
import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser, // 브라우저 전역 변수 추가
    },
    settings: {
      react: {
        version: 'detect', // React 버전 자동 감지
      },
    },
    rules: {
      // 여기에 추가적인 규칙을 정의할 수 있습니다.
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn',
      'react/prop-types': 'warn',
      'react/jsx-key': 'warn',
      'no-extra-boolean-cast': 'warn',
      'no-empty-pattern': 'warn',
    },
  },
  pluginJs.configs.recommended, // eslint:recommended 대체
  // pluginReact.configs.flat.recommended, // React 플러그인 Flat Config
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off', // 덮어쓰기
      'no-unused-vars': 'warn',
      'react/prop-types': 'warn',
      'react/jsx-key': 'warn',
      'no-extra-boolean-cast': 'warn',
      'no-empty-pattern': 'warn',
    },
  },
];
