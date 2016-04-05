import __dirname from 'path';

exports.register = (server, options, next) => {
  server.views({
    engines: {
      html: require('swig'),
    },
    path: '../templates',
    relativeTo: __dirname,
  });

  server.route([
    {
      method: 'GET',
      path: '/about',
      config: {
        handler: (request, reply) => {
          reply.view('about', {
            title: 'Super Informative About Page',
          });
        },
        id: 'about',
      },
    },

    {
      method: 'GET',
      path: '/build/{file*}',
      handler: {
        directory: {
          path: './build',
        },
      },
    },

    {
      method: 'GET',
      path: '/',
      config: {
        handler: (request, reply) => {
          // Render the view with the custom greeting
          reply.view('index', {
            title: 'Awesome Boilerplate Homepage',
          });
        },
        id: 'index',
      },
    },
  ]);

  next();
};


exports.register.attributes = {
  name: 'myPlugin',
  version: '1.0.0',
};
