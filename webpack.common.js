const path = require('path');
const webpack = require('webpack');

const venderPackages = require('./package.json').dependencies;
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    'app': './index.js',
    'vendor': Object.keys(venderPackages)
  },
  output: {
    path: path.join(__dirname, 'dst'),
    filename: './scripts/[name].bundle.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new HtmlWebpackPlugin({
      chunks: ['app'],
      filename: 'index.html',
      template: './template.ejs'
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: '.eslintrc.yml',
          presets: ['env', 'react'],
          failOnError: true
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  },
};
