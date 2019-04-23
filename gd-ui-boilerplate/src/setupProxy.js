const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // when '/packages' route below is removed,
  // "Uncaught SyntaxError: Unexpected token <" error
  // prevents https://localhost:3000/account.html from loading correctly
  app.use(proxy(['/gdc', '/packages'], {
    changeOrigin: true,
    cookieDomainRewrite: "localhost",
    secure: false,
    target: 'https://salesengineering.na.gooddata.com',
    headers: {
      host: 'salesengineering.na.gooddata.com',
      origin: null
    }
  }));
  app.use(proxy('/*.html', {
    changeOrigin: true,
    secure: false,
    cookieDomainRewrite: 'localhost',
    target: 'https://salesengineering.na.gooddata.com'
  }));
};
