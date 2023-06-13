/* eslint-disable import/no-extraneous-dependencies */
import replace from '@rollup/plugin-replace';

export default {
  input: './index.js',
  output: {
    file: 'dist/index.cjs',
    format: 'cjs',
    exports: 'default',
    preferConst: true,
    strict: false,
  },
  plugins: [
    replace({
      preventAssignment: true,
      delimiters: ['', ''],
      values: {
        "require('node-fetch')": "(...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))",
      },
    }),
  ],
};
