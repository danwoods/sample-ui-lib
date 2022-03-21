const glob = require('glob')
const path = require('path')
// const fs = require('fs')

module.exports = {
  mode: 'development',
  entry: glob.sync('./components/**/index.tsx').reduce((acc, path) => {
    const entry = path.replace('/index.tsx', '')
    acc[entry] = path
    return acc
  }, {}),
  output: {
    filename: './[name]/index.js',
    path: path.resolve(__dirname, './dist'),
    library: {
      type: 'umd',
    }
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}
