var path = require('path');
var webpack = require('webpack');

module.exports = {

  node: {
      Buffer: false
  },

  entry: {
    app: ['./lib/app'], //add more entry points
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: '/build/'
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
