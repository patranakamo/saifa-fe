module.exports = {
  transpileDependencies: [],
  devServer: {
    proxy: {
      '/v1': {
        target: '0.0.0.0:9988/v1/',
        changeOrigin: true,
        pathRewrite: {
          '^/v1': ''
        },
      },
    },
  },
};