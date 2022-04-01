const path = require('path');
const package = require('./package.json')

module.exports = {
  entry: './src/main.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: 'main.js',
    library: {
      name: package.name,
      type: 'umd',
    },
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
  },
};