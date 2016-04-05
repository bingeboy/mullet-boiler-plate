import { host, port } from '../../config';

const webpackConf = require('../../webpack.config');
webpackConf.devtool = 'source-map';
const Webpack = require('hapi-webpack-connection')(webpackConf);

const Hapi = require('hapi');
const server = new Hapi.Server();
const routes = require('./routes');

const Inert = require('inert');
const Vision = require('vision');
const Good = require('good');

server.connection({
  host,
  port,
});

server.register([

  {
    register: Good,
    options: {
      reporters: [{
        reporter: require('good-console'),
        events: {
          response: '*',
          log: '*',
        },
      }],
    },
  }, {
    register: Inert,
  }, {
    register: Vision,
  }, {
    register: routes,
  }], (err) => {
  if (err) {
    throw err; // something bad happened loading the plugin
  }

  server.start((err) => {
    if (err) {
      throw err;
    }

    server.log(`Server running at: ${server.info.uri}`);
  });
});

module.exports = server;
