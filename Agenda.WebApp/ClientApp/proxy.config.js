const proxy = [
    {
      context: '/api/*',
      target: 'https://localhost:6001',
      pathRewrite: {'^/api' : ''},
      secure : false,
      logLevel: "debug",
      changeOrigin: true,
    }
  ];
  module.exports = proxy;


 