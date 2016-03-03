const path = require('path');

exports.register = (server, options, next) => {

  // Setup the views engine and folder
  server.views({
      engines: {
        html: require('swig')
      },
      path: '../templates',
      relativeTo: __dirname
  });

  server.route([
    {
        method: 'GET',
        path: '/about',
        config: {
            handler: function(request, reply){
                reply.view('about', {
                    title: 'Super Informative About Page'
                });
            },
            id: 'about'
        }
    },

    {
      method: 'GET',
      path: '/build/{file}',
      handler: {
        directory: {
          path: path.join(__dirname, '../build')
        }
      }
    },

    {
      method: 'GET',
      path: '/',
      config: {
        handler: function(request, reply){
        // Render the view with the custom greeting
        reply.view('index', {
          title: 'Awesome Boilerplate Homepage'
        });
      },
      id: 'index'
    }
  },
  ])

  next();
};


exports.register.attributes = {
    name: 'myPlugin',
    version: '1.0.0'
}
