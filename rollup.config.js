import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import { defineConfig } from 'rollup';

const glob = require('glob')
// const path = require('path')

const input = glob.sync('./components/**/index.tsx').reduce((acc, path) => {
    const entry = path.replace('/index.tsx', '/index').replace('./', '')
    acc[entry] = path
    return acc
  }, {})


  console.log(input)

import pkg from './package.json'

export default defineConfig({
  input, //: './components/MuiButton/index.tsx',
  output: {
      // file: './dist/components/MuiButton/index.js',
      dir: './dist',
      format: 'es',
      exports: 'named',
      sourcemap: true
    },
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
})