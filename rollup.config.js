import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import json from '@rollup/plugin-json';

import { defineConfig } from 'rollup';

const glob = require('glob')

// Collect all components; place them at the top level
const components = glob.sync('./src/components/**/index.tsx').reduce((acc, path) => {
    const entry = path.replace('/index.tsx', '/index').replace('./src/components/', '')
    acc[entry] = path
    return acc
  }, {})

const theme = {'Theme/index': './src/Theme/index.tsx'}


export default defineConfig({
  input: {...components, ...theme},
  output: {
      dir: './dist',
      format: 'es',
      exports: 'named',
      sourcemap: true
    },
  external: ["react", "react-is", 'react/jsx-runtime' ],
  plugins: [
    json(),
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