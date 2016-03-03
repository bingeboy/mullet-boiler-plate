'use strict';

//server config
const config = require('../../config');
const host = config.server.env;
const port = config.server.port;

//Webpack config
const webpackConf = require('../../webpack.config.js');
webpackConf.devtool = 'source-map';
const Webpack = require('hapi-webpack-connection')(webpackConf);

//dep
const Hapi = require('hapi');
const server = new Hapi.Server();
const routes = require('./routes');

//hapi dep
const Inert = require('inert');
const Vision = require('vision');
const Good = require('good');

server.connection({
  host: host,
  port: port
});

server.register([
  {
    register: Good,
    options: {
      reporters: [{
      reporter: require('good-console'),
      events: {
          response: '*',
          log: '*'
        }
      }]
    }
  }, {
    register: Inert
  }, {
    register: Vision
  }, {
    register: routes
  }], (err) => {

if (err) {
  throw err; // something bad happened loading the plugin
}

server.start((err) => {
  if (err) {
    throw err;
  }
  server.log('info', 'Server running at: ' + server.info.uri);
  });
});

module.exports = server;
