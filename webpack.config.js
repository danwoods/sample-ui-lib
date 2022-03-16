const glob = require('glob')
const path = require('path')
const fs = require('fs')

const isFile = (fileName) => {
  return fs.lstatSync(fileName).isFile()
}

console.log(
  fs.readdirSync(path.resolve(__dirname, './components')).map((fileName) => {
    return path.join(path.resolve(__dirname, './components'), fileName)
  })
  // .filter(isFile)
)

console.log(
  glob.sync('./components/**/index.tsx').reduce((acc, path) => {
    const entry = path.replace('/index.tsx', '')
    acc[entry] = path
    return acc
  }, {})
)

module.exports = {
  // entry: path.resolve(__dirname, './theme.tsx'),
  entry: glob.sync('./components/**/index.tsx').reduce((acc, path) => {
    const entry = path.replace('/index.tsx', '')
    acc[entry] = path
    return acc
  }, {}),
  output: {
    // path: path.resolve(__dirname, './dist'),
    // filename: 'index.js',
    filename: './[name]/index.js',
    path: path.resolve(__dirname, './dist'),
    library: {
      // libraryTarget: 'commonjs',
      name: 'Spruce',
      type: 'umd',
      export: 'default'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}