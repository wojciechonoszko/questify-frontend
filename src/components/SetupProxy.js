
const { createProxyMiddleware } = require('http-proxy-middleware');



module.exports = function (app) {
  app.use(
    createProxyMiddleware('/cors', {
      target: 'http://localhost:8155',
    })
  );
};
