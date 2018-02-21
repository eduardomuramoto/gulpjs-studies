const StaticServer = require('static-server');
const server = new StaticServer({
  rootPath: './public/',
  port: 5000
});

server.start(() => {
  console.log('Server running on port:' + server.port)
});
