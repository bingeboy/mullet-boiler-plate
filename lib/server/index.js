'use strict';

//@TODO make these ENV values
var host = 'localhost';
var port = 3000;

//Webpack config
var webpackConf = require('../../webpack.config.js');
webpackConf.devtool = 'source-map';
var Webpack = require('hapi-webpack-connection')(webpackConf);

//Dep
var Hapi = require('hapi');
var Inert = require('inert');
var server = new Hapi.Server();

server.connection({
    host: host,
    port: port
});

//start server and register dev server as plugin
server.start(function () {
  server.register([
    require('inert'),
    require('vision'),
    require('./routes'),
  ], function (err) {
      console.log(err);
  });
});

module.exports = server;
