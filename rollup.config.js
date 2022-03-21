import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'

export default {
  input: './components/MuiButton/index.tsx',
  output: [
    // {
    //   file: pkg.main,
    //   format: 'cjs',
    //   exports: 'named',
    //   sourcemap: true
    // },
    {
      file: './dist/components/MuiButton/index.js',
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  external: ["react", /*"@material-ui/core",*/ "react-is", 'react/jsx-runtime' ],
  plugins: [
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: [
        '**/__tests__/**',
        '**/*.stories.*'
      ],
      clean: true
    }),
    commonjs({
      include: ['node_modules/**'],
      namedExports: {}
    })
  ]
}