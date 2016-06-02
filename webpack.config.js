/**
 * Created by xmityaz on 02.06.16.
 */

const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    js: './index.js',
    html: './index.html',
    css: './styles.css',
  },
  output: {
    path: './bin',
    file: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$|\.css$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};
