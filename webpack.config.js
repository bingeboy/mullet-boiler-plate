'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + "/lib",

  node: {
      Buffer: false
  },

  entry: {
    app: ['./app'], //add more entry points
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './build'),
    publicPath: 'http://0.0.0.0:8000'
  },

  module: {
    loaders: [
      { test: /\.html$/, loader: "handlebars-loader" }, //verify this is the correct loader
      { test: /\.jsx?$/, loader: 'babel'},
      { test: /\.scss$/, loader: 'style!css!sass'}
    ]
  },

  externals: {
      'react': 'React'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['lib', 'node_modules']
  }
}
