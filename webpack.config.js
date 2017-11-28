newFunction();

function newFunction() {
  const path = require('path');
  const webpack = require('webpack');
  const merge = require('webpack-merge');
  const common = require('./webpack.common.js');
  module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, 'dst'),
      compress: true,
      port: 8888
    }
  });
}
