module.exports = {
  transpileDependencies: [],
  devServer: {
    proxy: {
      '/v1': {
        target: 'http://callcraft.app/v1/', // URL of your backend server
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          '^/v1': '' // rewrite path
        },
      },
    },
  },
};