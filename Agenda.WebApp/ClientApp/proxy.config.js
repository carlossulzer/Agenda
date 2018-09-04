const proxy = [
    {
      context: '/api',
      target: 'https://localhost:6001',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;