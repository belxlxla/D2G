const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',
    port: 8081,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'https://devapi.daeng2go.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        secure: false,
      },
    },
  },
});
