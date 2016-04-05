var config = {};

config.server = {
  env: process.NODE_ENV || 'localhost',
  port: '3000'
}

config.paths = {
  controllers: '/lib/app/controllers',
  server: '/lib/server/server',
  styles: '/lib/app/styles',
  views: '/lib/app/views',
  templates: '/lib/templates'
};

module.exports = config;
