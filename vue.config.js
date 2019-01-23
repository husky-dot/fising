const path = require('path')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}


module.exports = {
  baseUrl: './',
  // baseUrl: process.env.NODE_ENV === 'production' ? '/vue-typescript-admin-template/' : '/',
  transpileDependencies: ['vuex-module-decorators'],
  pwa: {
    name: 'vue-typescript-admin-template'
  },
  configureWebpack: {
    externals: {
      'google': 'google'
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'NODE': resolve('node_modules'),
        '@views': resolve('src/views'),
        '@pic': resolve('src/assets/images'),
        '@styles': resolve('src/assets/styles'),
        '@utils': resolve('src/utils'),
        '@api': resolve('src/api'),
        '@components': resolve('src/components')
      }
    }
  },
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://110.86.21.246:8886', // 31服务器
        autoRewrite: true,
        changeOrigin: true,
        cookieDomainRewrite: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
}
